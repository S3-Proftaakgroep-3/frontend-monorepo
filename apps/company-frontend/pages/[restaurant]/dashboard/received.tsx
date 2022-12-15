import {NextPage} from "next"
import styles from '../../../styles/dashboard.module.css'
import {NavBar, FullOrderCard} from "ui/Components"
import {IOrder} from "ui/Interfaces/IOrder";
import * as React from "react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useReadLocalStorage} from "usehooks-ts";
import GoogleHelper from "../../../helpers/GoogleHelper";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({query}: ContextTypes) {
    try {
        const restaurantId = query.restaurant

        const res = await fetch(`https://mdmaorderservice.azurewebsites.net/api/order/all/${restaurantId}/received`)
        const data = await res.json();

        return {
            props: {
                orders: data as IOrder[],
                restaurantId: restaurantId as string
            }
        }
    } catch {
        return {
            redirect: {
                destination: "/error"
            }
        }
    }
}

interface PropTypes {
    orders: IOrder[],
    restaurantId: string
}

const Received: NextPage<PropTypes> = ({orders, restaurantId}: PropTypes) => {
    // Router
    const router = useRouter();

    // Google
    const googleHelper = new GoogleHelper()
    const [loggedInEmail, setLoggedInEmail] = useState("");
    const google: any = useReadLocalStorage("google");

    // Use this to check if user is logged in, when not logged in you get redirected back to login page
    useEffect(() => {
        googleHelper.CheckIfLoggedIn(google, restaurantId).then((isLoggedIn: boolean) => {
            if(isLoggedIn) {
                setLoggedInEmail(googleHelper.GetLoggedInUser(google));
                return;
            } else {
                router.push("/login");
            }
        })
    }, [])

    const handleLogout = () => {
        setLoggedInEmail("")
        localStorage.removeItem("google")
        router.push('/login')
    }
    // End of Google

    const [allOrders, setAllOrders] = useState<IOrder[]>(orders);

    return (
        <>
            <main id={styles.cardsContainer}>
                {
                    // Do this to prevent seeing data before redirecting back to login
                    loggedInEmail == "" ? <div></div> : allOrders != null && allOrders.length > 0 &&
                        allOrders.map((order: IOrder, key: number) => {
                            return <FullOrderCard key={key} order={order}/>
                        })
                }
                {
                    allOrders.length == 0 && <p>No orders marked as received yet.</p>
                }
            </main>
            <NavBar email={loggedInEmail} handleLogout={handleLogout}/>
        </>
    )
}

export default Received