import {IOrder} from "../../Interfaces/IOrder";
import {ICartItem} from "../../Interfaces/ICartItem";

interface PropTypes {
    order: IOrder
}

export const CompanyOrderCard = ({ order } : PropTypes) => {

    return (
        <div>
            <div>{order.tableId}</div>
            {
                order.products && order.products.length > 0 &&
                order.products.map((product: ICartItem, index: number) => {
                    return (
                            <div key={index}>
                                <p>{product.name}</p>
                            </div>
                        )
                })
            }
        </div>
    )
}