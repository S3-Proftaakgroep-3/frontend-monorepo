import {NextPage} from "next";
import * as React from "react";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Index: NextPage = () => {
    const router = useRouter();
    const {restaurantId} = router.query;

    const addItemsToSessionStorage = () => {
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
