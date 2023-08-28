import { Book } from "./Book";


export class Order 
{
    
    bookList?: Book[];
    cartId ?: number;
    customer?: number;
    orderAddress?: string;
    orderDate?: string;
    orderId?: number;
    orderPrice?: number;
    orderQuantity?: number;
    orderStatus?: string;
}

export interface Orders{
    bookList?: Book[];
    cartId ?: number;
    customer?: number;
    orderAddress?: string;
    orderDate?: string;
    orderId?: number;
    orderPrice?: number;
    orderQuantity?: number;
    orderStatus?: string;
}