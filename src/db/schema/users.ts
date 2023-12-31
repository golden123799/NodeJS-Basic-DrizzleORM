import { InferModel } from "drizzle-orm";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  phone: varchar("phone", { length: 256 }),
});

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;
