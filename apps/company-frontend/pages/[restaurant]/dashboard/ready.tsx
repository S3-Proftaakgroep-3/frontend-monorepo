import { NextPage } from "next"
import styles from '../../../styles/dashboard.module.css'
import { NavBar } from "ui/Components"
import * as React from "react";
import GoogleHelper from "../../../helpers/GoogleHelper";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useReadLocalStorage} from "usehooks-ts";

const Ready: NextPage = () => {
    // Router
    const router = useRouter();
    // Google
    const googleHelper = new GoogleHelper()
    const [loggedInEmail, setLoggedInEmail] = useState("");
    const google: any = useReadLocalStorage("google");

    // Use this to check if user is logged in, when not logged in you get redirected back to login page
    useEffect(() => {
        if (googleHelper.CheckIfLoggedIn(google)){
            setLoggedInEmail(googleHelper.GetLoggedInUser(google));
            return;
        }
        router.push("/login");
    }, [])

    return (
        <>
            <main id={styles.cardsContainer}>
                {
                    loggedInEmail == "" ? <div></div> : <p>No orders marked as ready yet.</p>
                }
            </main>
            <NavBar email={loggedInEmail}/>
        </>
    )
}

export default Ready