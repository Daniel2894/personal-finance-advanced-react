import { z } from "zod";

export const WALLETS = [
  "Efectivo",
  "Tarjeta débito",
  "Tarjeta crédito",
] as const;

export const CATEGORIES = [
  "Alimentación",
  "Transporte",
  "Salud",
  "Entretenimiento",
  "Servicios",
  "Ropa",
  "Educación",
  "Otros",
] as const;

type Wallet = (typeof WALLETS)[number];
type Category = (typeof CATEGORIES)[number];

export type Expense = {
  id: string;
  wallet: Wallet;
  category: Category;
  amount: number;
  description: string;
  date: string;
};

export const expenseSchema = z.object({
  wallet: z.string("Select a wallet").min(1, "Select a wallet"),

  category: z.string("Select a category").min(1, "Select a category"),

  amount: z
    .number({
      error: (issue) =>
        issue.input === undefined
          ? "The amount is required"
          : "Please enter a valid amount",
    })
    .positive("The amount must be a positive number"),

  description: z.string().optional(),

  date: z.date({
    error: (issue) =>
      issue.input === undefined ? "The date is required" : "Invalid date",
  }),
});

export type TransactionFormData = z.infer<typeof expenseSchema>;
