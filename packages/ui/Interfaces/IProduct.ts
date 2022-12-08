import {IExtra} from "./IExtra";

export interface IProduct{
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    sizes: string[],
    category: string,
    extras: IExtra[];
    active: boolean,
    isBeverage: boolean,
    allergies: string[]
}