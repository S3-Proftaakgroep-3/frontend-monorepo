import {IExtra} from "./IExtra";

export interface ICartItem {
    name: string,
    price: number,
    message: string | null,
    size: string,
    extras: IExtra[] | null,
    quantity: number
}