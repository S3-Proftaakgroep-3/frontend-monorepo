import {NextPage} from "next";
import * as React from "react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {wait} from "next/dist/build/output/log";

const Index: NextPage = () => {
    const router = useRouter();
    const {tableId, restaurantId} = router.query;

    const addItemsToSessionStorage = () => {
        sessionStorage.setItem("tableId", tableId as string)
        sessionStorage.setItem("restaurantId", restaurantId as string)
    }
    useEffect(() => {
        if (!router.isReady) return;
        addItemsToSessionStorage()
        router.push('/' + restaurantId)
    })

    return (
        <div>

        </div>
    )
}
export default Index