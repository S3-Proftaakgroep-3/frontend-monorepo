import {ICartItem} from "./ICartItem";

export interface IOrder {
    tableId: string,
    restaurantId: string,
    productList: ICartItem[],
    orderStatus: "Received" | "Preparing" | "Done"
}