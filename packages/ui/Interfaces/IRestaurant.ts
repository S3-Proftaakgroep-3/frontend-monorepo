import {IMenu} from "./IMenu";
import {ICategory} from "./ICategory";

export interface IRestaurant {
    id: string,
    name: string,
    menu: IMenu,
    categories: ICategory[]
}