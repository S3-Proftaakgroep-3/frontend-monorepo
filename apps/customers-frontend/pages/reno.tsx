import * as React from "react";
import { SearchBar, OrderBackButton } from 'ui'
import {NextPage} from "next";
import {OrderDetailButton} from "ui/Components/Atoms/Buttons/orderDetailButton";


const Reno: NextPage = () => {
    return (
        <div>
            <SearchBar/>
            <OrderBackButton/>
            <OrderDetailButton/>
        </div>
    )
}

export default Reno
