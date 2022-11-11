import {ICartItem} from "./ICartItem";

export interface IOrder {
    tableId: string,
    restaurantId: string,
    products: ICartItem[],
    orderStatus: "Received" | "Making" | "Done"
}