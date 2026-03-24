import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "@/components/ui/field";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { format } from "date-fns";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import {
  CATEGORIES,
  expenseSchema,
  TransactionFormData,
  WALLETS,
} from "@/schemas/expense-schema";
import { useState } from "react";
import { List, Wallet, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AddTransactionForm() {
  const form = useForm<TransactionFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      wallet: "",
      category: "",
      amount: 0,
      description: "",
      date: new Date(),
    },
  });

  const selectedDate = form.watch("date");
  function onSubmit(data: TransactionFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup>
          <Field data-invalid={!!form.formState.errors.wallet}>
            <FieldLabel htmlFor="wallet">Wallet</FieldLabel>
            <Combobox items={WALLETS}>
              <ComboboxInput placeholder="Select a wallet">
                <InputGroupAddon>
                  <Wallet />
                </InputGroupAddon>
              </ComboboxInput>
              <ComboboxContent>
                <ComboboxEmpty>No wallet found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <FieldError errors={[form.formState.errors.wallet]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.category}>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Combobox items={CATEGORIES}>
              <ComboboxInput placeholder="Select a category">
                <InputGroupAddon>
                  <List />
                </InputGroupAddon>
              </ComboboxInput>
              <ComboboxContent>
                <ComboboxEmpty>No categories found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>

          <Field data-invalid={!!form.formState.errors.amount}>
            <FieldLabel htmlFor="amount">Amount</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="0" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>COP</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldError errors={[form.formState.errors.amount]} />
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <InputGroup>
              <InputGroupTextarea placeholder="Add a description (optional)" />
            </InputGroup>
          </Field>

          <Field data-invalid={!!form.formState.errors.date}>
            <FieldLabel htmlFor="date">Date</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date-trigger"
                  variant="outline"
                  data-empty={!selectedDate}
                  aria-invalid={!!form.formState.errors.date}
                  className="w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate
                    ? format(selectedDate, "dd/MM/yyyy")
                    : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) =>
                    form.setValue("date", date as Date, {
                      shouldValidate: true,
                    })
                  }
                  disabled={(date) => date > new Date()}
                />
              </PopoverContent>
            </Popover>
            <FieldError errors={[form.formState.errors.date]} />
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
