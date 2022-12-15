import {NextPage} from "next";
import {GoogleLogin} from "@react-oauth/google";
import * as React from "react";
import {useRouter} from "next/router";
import {useLocalStorage} from "usehooks-ts";
import toast from "react-hot-toast";
import jwtDecode from "jwt-decode";
import {useEffect, useState} from "react";

interface GoogleEmail {
    email: string
}

const Login: NextPage = () => {
    const router = useRouter()
    const [jwt, setJwt] = useLocalStorage("google", null)
    const [restaurantId, setRestaurantId] = useState(null)

    async function onSuccess(res: any) {
        setJwt(res.credential);

        const decode: GoogleEmail = jwtDecode(res.credential);
        try {
            fetch(`https://mdmaaccountservice.azurewebsites.net/api/account/${decode.email}`).then(async (data) => {
                const result = await data.json()
                setRestaurantId(result.restaurantId)
            })

        } catch {
            router.push("/login")
        }
    }

    useEffect(() => {
        if (router.isReady) {
            if (restaurantId != null) {
                router.push(`/${restaurantId}/dashboard/preparing`)
            }
        }
    }, [restaurantId])

    const notifyFailed = () => {
        toast.error(`Failed to login.`);
    }

    return(
        <GoogleLogin
            onSuccess={credentialResponse => {
                onSuccess(credentialResponse)
            }}
            onError={() => {
                notifyFailed()
            }}
        />
    )

}

export default Login;