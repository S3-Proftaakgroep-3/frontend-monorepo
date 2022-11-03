import {Sizes} from "../Enums";

export interface IProduct{
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    size: Sizes,
    category: string,
    active: boolean,
    isBeverage: boolean,
    allergies: string[]
}