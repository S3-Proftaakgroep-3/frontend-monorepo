import {NextPage} from "next"
import styles from '../../../styles/dashboard.module.css'
import {NavBar, FullOrderCard} from "ui/Components"
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {IOrder} from "ui/Interfaces/IOrder";
import * as React from "react";
import GoogleHelper from "../../../helpers/GoogleHelper";
import {useReadLocalStorage} from "usehooks-ts";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({query}: ContextTypes) {
    const restaurantId = query.restaurant

    const res = await fetch(`https://mdmaorderservice.azurewebsites.net/api/order/all/${restaurantId}/received`)
    const data = await res.json();

    return {
        props: {
            orders: data as IOrder[]
        }
    }
}

interface PropTypes {
    orders: IOrder[]
}

const Received: NextPage<PropTypes> = ({orders}: PropTypes) => {
    // Router
    const router = useRouter();

    // Google
    const googleHelper = new GoogleHelper()
    const [loggedInEmail, setLoggedInEmail] = useState("");
    const google: any = useReadLocalStorage("google");

    // Use this to check if user is logged in, when not logged in you get redirected back to login page
    useEffect(() => {
        if (googleHelper.CheckIfLoggedIn(google)) {
            setLoggedInEmail(googleHelper.GetLoggedInUser(google));
            return;
        }
        router.push("/login");
    }, [])

    const [pathName, setPathName] = useState<string | undefined>(undefined);
    const [allOrders, setAllOrders] = useState<IOrder[]>(orders);

    useEffect(() => {
        if (router.isReady) {
            const path = Array.isArray(router.query.restaurant) ? router.query.restaurant[0] : router.query.restaurant
            if (path) {
                setPathName(path)
            }
        }
    }, [router.isReady])

    useEffect(() => {
        if (pathName) {
            const urlEndpoint = `https://mdmaorderservice.azurewebsites.net/api/order/subscribe/${pathName}/status/received`;
            let eventSource = new EventSource(urlEndpoint);

            eventSource.addEventListener("Latest's Orders", (event) => {
                setAllOrders(JSON.parse(event.data))
            })
        }
    }, [pathName])

    return (
        <>
            <main id={styles.cardsContainer}>
                {
                    loggedInEmail == "" ? <div></div> : allOrders != null && allOrders.length > 0 &&
                        allOrders.map((order: IOrder, key: number) => {
                            return <FullOrderCard key={key} order={order}/>
                        })
                }
            </main>
            <NavBar email={loggedInEmail}/>
        </>
    )
}

export default Received