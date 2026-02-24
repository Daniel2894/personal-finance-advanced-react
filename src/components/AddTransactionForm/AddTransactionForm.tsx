import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { z } from "zod";
import { useForm } from "react-hook-form";

const transactionSchema = z.object({
  wallet: z.string().min(1, "Wallet is required"),
  category: z.string().min(1, "Category is required"),
  amount: z.number().min(0.0, "Amount must be greater than 0"),
  description: z.string().optional(),
  date: z.date(),
});

export default function AddTransactionForm() {
  const { register } = useForm<z.infer<typeof transactionSchema>>();
  return (
    <form>
      <FieldSet>
        <Field>
          <FieldLabel>Category</FieldLabel>
          <Input></Input>
        </Field>
        <Field>
          <FieldLabel>Amount</FieldLabel>
          <Input></Input>
        </Field>
        <Field>
          <FieldLabel>Description</FieldLabel>
          <Input></Input>
        </Field>
        <Field>
          <FieldLabel>Date</FieldLabel>
          <Input></Input>
        </Field>
      </FieldSet>
    </form>
  );
}
