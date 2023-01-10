import {NextPage} from "next";
import * as React from "react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import styles from "../styles/fonts.module.css"

interface ContextTypes {
    query: any
}

export async function getServerSideProps({query}: ContextTypes) {
    try {
        const restaurantId = query.restaurantId
        const tableId = query.tableId

        const res = await fetch(`https://mdmawhitelabelservice.azurewebsites.net/api/whitelabel/get/${restaurantId}`)
        const data = await res.json();

        return {
            props: {
                restaurantId: restaurantId,
                tableId: tableId,
                settings: data
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

// interface Styles {
//     '--bg-color': string;
//     '--primary-color': string;
//     '--text-color': string;
// }


const Index: NextPage<any> = ({restaurantId, tableId, settings}: {restaurantId: string, tableId: string, settings: any}) => {
    const router = useRouter();


    const addStylesToSessionStorage = () => {
        //Save styles on first QR code scan to local storage
        localStorage.setItem('styles', JSON.stringify({
            '--bg-color': settings.backgroundColour,
            '--primary-color': settings.primaryColour,
            '--text-color': settings.textColour
        }));

        //To retrieve them in other pages use the following code:
        // Retrieve styles from localStorage
        // const savedStyles = JSON.parse(localStorage.getItem('styles')!) as Styles;

        // Apply the saved styles
        // Object.entries(savedStyles).forEach(([property, value]) => {
        //    document.documentElement.style.setProperty(property, value);
        // });


    }

    const addItemsToSessionStorage = () => {
        sessionStorage.setItem("tableId", tableId as string)
        sessionStorage.setItem("restaurantId", restaurantId as string)
    }

    useEffect(() => {
        if (!router.isReady) return;
        addItemsToSessionStorage();
        addStylesToSessionStorage();
        // router.push('/' + restaurantId)
    })

    return (
      <></>
    )
}
export default Index