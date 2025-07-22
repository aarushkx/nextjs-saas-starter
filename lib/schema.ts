import {
    pgTable,
    text,
    varchar,
    timestamp,
    boolean,
    uuid,
    numeric,
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
    token: varchar("token", { length: 128 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const billing = pgTable("billing", {
    id: uuid("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    amount: numeric("amount").notNull(),
    currency: varchar("currency", { length: 10 }).notNull(),
    purchasedAt: timestamp("purchased_at", {
        withTimezone: true,
    }).defaultNow(),
    isEmailSent: boolean("is_email_sent").default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const quotes = pgTable("quotes", {
    id: uuid("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    quote: text("quote").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
