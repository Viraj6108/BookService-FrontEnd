export class Book {
    author? : string;
    bookId?: number;
    description?: string;
    imageUrl? : string;
    name!: string ;
    price?: number;
    totalStockOfBooks?: number;
}