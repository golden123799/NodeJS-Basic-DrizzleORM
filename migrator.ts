import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
require("dotenv").config();

const doMigrate = async () => {
  const connectionString = `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
  if (!connectionString) {
    console.error(
      "No connection string found. Check if it is declared in the environment variable."
    );
  }

  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  try {
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("Migration  completed.");
  } catch (error) {
    console.log("Migration failed: ", error);
    process.exit(0);
  } finally {
    await sql.end();
  }
};

doMigrate();
