import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  code: varchar("code", { length: 256 }),
});
