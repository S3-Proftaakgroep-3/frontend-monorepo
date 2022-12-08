import jwtDecode from "jwt-decode";

interface GoogleEmail {
    email: string
}

export default class GoogleHelper {
    public CheckIfOK(google: any){
        const decode: GoogleEmail = jwtDecode(google);
        console.log(decode.email)
    }
}

