import prisma from "../../src/config/prisma.js";
import bcrypt from "bcrypt";

const usersData = 
[
  {
    name: "admin123",
    email: "admin@example.com",
    plainPassword: "admin123",
    role: "admin"
  },
  {
    name: "creator123",
    email: "creator@example.com",
    plainPassword: "creator123",
    role: "creator"
  },
  {
    name: "editor123",
    email: "editor@example.com",
    plainPassword: "editor123",
    role: "editor"
  }
]

export const userSeeder = async() => {
  console.log('seeding user!....');
  for (const user of usersData) {
    const passwordHash = await bcrypt.hash(user.plainPassword, 10);

    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        password_hash: passwordHash,
        role: user.role,
      },
      create: {
        name: user.name,
        email: user.email,
        password_hash: passwordHash,
        role: user.role,
      },
    })
  }
  console.log("User seeding completed!");
}