import "dotenv/config";
import { PrismaClient } from "../generated/client/index.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Pakai DATABASE_URL yang sama dengan prisma.config.ts (migrate) supaya database-nya konsisten
const adapter = new PrismaMariaDb(process.env.DATABASE_URL);


const prisma = new PrismaClient({ adapter });

export default prisma;