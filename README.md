# Creator Content & Pipeline Tracker API

Backend REST API untuk mengelola akun, channel media sosial, content pipeline,
checklist produksi, dan metric content. Project ini dibangun menggunakan
Express.js, Prisma ORM, dan MySQL/MariaDB.

## Teknologi

- Node.js dengan ES Modules
- Express 5
- Prisma ORM 7
- MySQL/MariaDB
- JWT untuk autentikasi
- Joi untuk validasi request
- bcrypt untuk hashing password

## Struktur Project

```text
.
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── validation/
│   └── app.js
├── server.js
├── package.json
└── prisma.config.ts
```

## Prasyarat

- Node.js 18 atau versi lebih baru
- MySQL atau MariaDB
- npm

## Instalasi

```bash
npm install
```

Buat file `.env` di root project:

```env
PORT=5000
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
JWT_SECRET="ganti-dengan-secret-yang-aman"
JWT_EXPIRES_IN="1d"
```

Jalankan migration dan generate Prisma Client:

```bash
npx prisma migrate dev
npx prisma generate
```

Jika ingin menjalankan seeder:

```bash
node prisma/seed.js
```

Jalankan server dalam mode development:

```bash
npm run dev
```

Server berjalan pada `http://localhost:5000` secara default.

Health check:

```http
GET /
```

## Autentikasi

Login menghasilkan JWT. Gunakan token tersebut pada endpoint yang dilindungi:

```http
Authorization: Bearer <token>
```

Role yang tersedia:

- `creator`: mengelola channel, content, dan checklist miliknya sendiri.
- `editor`: melihat content, mengerjakan checklist ketika content berstatus
  `editing`, dan mengubah content sesuai aturan workflow.
- `admin`: memiliki akses lintas user untuk kebutuhan administrasi.

## Format Response

Sebagian besar endpoint menggunakan format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "meta": null
}
```

Error validasi biasanya mengembalikan HTTP `422`, sedangkan error autentikasi
atau otorisasi mengembalikan HTTP `401` atau `403`.

## API Endpoints

Base URL:

```text
/api/v1
```

### Authentication

#### Register

```http
POST /api/v1/auth/register
Content-Type: application/json
```

Request body:

```json
{
  "name": "Creator Example",
  "email": "creator@example.com",
  "password": "creator123",
  "role": "creator"
}
```

`role` bersifat opsional dan default-nya `creator`. Nilai yang valid:
`creator`, `editor`, dan `admin`.

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json
```

Request body:

```json
{
  "email": "creator@example.com",
  "password": "creator123"
}
```

### Channels

Semua endpoint channel membutuhkan JWT.

#### List channels

```http
GET /api/v1/channels
```

Query parameter:

- `user_id`: filter berdasarkan user. Filter lintas user hanya berlaku untuk
  admin.

Creator dan editor hanya melihat channel milik akun yang sedang login. Admin
dapat melihat semua channel.

#### Create channel

```http
POST /api/v1/channels
Content-Type: application/json
```

Request body:

```json
{
  "platform": "youtube",
  "handle_name": "@creator-example"
}
```

Platform yang valid: `youtube`, `tiktok`, `instagram`, dan `linkedin`.
Editor tidak dapat membuat channel.

### Contents

Semua endpoint content membutuhkan JWT.

#### List contents

```http
GET /api/v1/contents
```

Query parameter yang tersedia:

- `status`: `idea`, `scripting`, `recording`, `editing`, `review`, `ready`,
  atau `published`
- `channel_id`
- `format_type`: `short_video`, `long_video`, `carousel`, atau `single_post`
- `author_id`: filter author untuk admin/editor

Creator hanya melihat content miliknya sendiri. Admin dan editor dapat melihat
content seluruh creator.

#### Detail content

```http
GET /api/v1/contents/:id
```

Creator hanya dapat membuka content miliknya. Admin dan editor dapat membuka
content creator lain.

#### Create content

```http
POST /api/v1/contents
Content-Type: application/json
```

Request body:

```json
{
  "channel_id": 1,
  "title": "Video pertama",
  "description": "Deskripsi content",
  "script_draft": "Draft script",
  "format_type": "short_video",
  "status": "idea",
  "priority": "medium",
  "scheduled_date": "2026-11-10T00:00:00.000Z"
}
```

Content wajib dibuat pada channel milik creator yang sedang login.

#### Update content

```http
PUT /api/v1/contents/:id
Content-Type: application/json
```

Field request bersifat opsional. Field yang dapat diubah:
`channel_id`, `title`, `description`, `script_draft`, `format_type`, `status`,
`priority`, `scheduled_date`, `published_date`, `published_url`, dan
`recording_url`. Saat status diubah menjadi `editing`, `recording_url` wajib
sudah tersimpan atau dikirim dalam request.

#### Delete content

```http
DELETE /api/v1/contents/:id
```

### Checklist

#### Create checklist task

```http
POST /api/v1/contents/:id/checklists
Content-Type: application/json
```

Request body:

```json
{
  "task_name": "Edit video"
}
```

Task checklist dibuat oleh creator pemilik content.

#### Toggle checklist

```http
PATCH /api/v1/checklists/:id/toggle
```

Creator dapat melakukan toggle checklist miliknya. Editor dapat melakukan
toggle checklist content creator hanya ketika status content adalah `editing`.

#### Delete checklist

```http
DELETE /api/v1/checklists/:id
```

Penghapusan checklist hanya berlaku untuk pemilik content. Editor tidak dapat
menghapus task checklist.

### Metrics

Metric dibuat melalui endpoint nested berikut:

```http
POST /api/v1/contents/:id/metrics
Content-Type: application/json
```

Request body:

```json
{
  "recorded_at": "2026-11-02",
  "views_count": 1000,
  "likes_count": 100,
  "comments_count": 20,
  "shares_count": 10
}
```

Metric hanya dapat dicatat untuk content berstatus `published`.

- Admin dapat mencatat metric untuk content apa pun.
- Creator hanya dapat mencatat metric untuk content miliknya.
- Editor dan creator lain ditolak.

## Model Data

Relasi utama:

```text
User 1---* Channel
User 1---* Content
Channel 1---* Content
Content 1---* ContentChecklist
Content 1---* ContentMetric
```

Penghapusan user, channel, atau content akan menghapus data turunannya sesuai
konfigurasi cascade pada schema Prisma.

## Menjalankan Prisma Studio

```bash
npx prisma studio
```

## Pengujian Endpoint

File [postman_collection.json](./postman_collection.json) berisi collection
untuk mencoba endpoint API. Import collection tersebut ke Postman, isi
environment `baseUrl`, lalu jalankan login terlebih dahulu untuk mendapatkan
token.

## Catatan Pengembangan

- Jangan commit file `.env` atau secret JWT ke repository.
- Pastikan `DATABASE_URL` pada `.env` menggunakan database yang sama dengan
  konfigurasi Prisma.
- ID database menggunakan `BigInt`; API mengubah serialisasi `BigInt` menjadi
  string pada JSON response.
