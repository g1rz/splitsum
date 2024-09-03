import { ProductId } from "~/entities/products/model/types";

export type ExpenseId = Brand<Id, 'ExpenseId'>;

export type Expense = {
    id: ExpenseId;
    userId: string;
    productId?: ProductId;
};
