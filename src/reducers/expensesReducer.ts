import { Expense } from "@/schemas/expense-schema";

type Action =
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "REMOVE_EXPENSE"; payload: string };

export default function expensesReducer(state: any, action: any) {}
