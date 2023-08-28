import { Book } from "./Book";

export class Cart{
    cartID?: number;
    quantity?: number;
    bookList ?: Book[];
    totalCost?: number;
}