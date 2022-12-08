import {NextPage} from "next";
import {GoogleLogin} from "@react-oauth/google";
import * as React from "react";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import {useState} from "react";
import jwtDecode from "jwt-decode";
import {useRouter} from "next/router";
import {useLocalStorage} from "usehooks-ts";


const Login: NextPage = () => {
    const router = useRouter()
    const [jwt, setJwt] = useLocalStorage("google", null)
    function onSuccess(res: any){
        setJwt(res.credential);
        router.push('/634d19164de0297c8b68ba66/dashboard/progress')
    }

    return(
        <GoogleLogin
            onSuccess={credentialResponse => {
                onSuccess(credentialResponse)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )

}

export default Login;