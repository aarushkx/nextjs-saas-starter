import {
    pgTable,
    text,
    varchar,
    timestamp,
    boolean,
    uuid,
    integer,
} from "drizzle-orm/pg-core";

// Store Clerk's user data
export const users = pgTable("users", {
    id: text("id").primaryKey(), // Clerk's user ID
    email: varchar("email", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }),
    isPro: boolean("is_pro").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const tokens = pgTable("tokens", {
    id: uuid("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    token: integer("token").notNull().default(100), // 100 free tokens initially
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
