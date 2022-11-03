import {IMenu} from "./IMenu";

export interface IRestaurant {
    id: string,
    name: string,
    menu: IMenu,
    categories: string[]
}