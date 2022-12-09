import jwtDecode from "jwt-decode";

interface GoogleEmail {
    email: string
}

export default class GoogleHelper {
    /**
     * Check if the user logged in is the right one
     * @param google
     * @constructor
     */
    public CheckIfLoggedIn(google: any): boolean {
        // Check if google is null
        if (google == null) {
            return false;
        }

        const decode: GoogleEmail = jwtDecode(google);

        // TODO: Right check, buts needs to go inside database, I cant get in
        if (decode.email != "") {
            return true;
        }

        return false;
    }

    /**
     * Get Logged in user
     * @param google
     * @constructor
     */
    public GetLoggedInUser(google: any): string {
        const decode: GoogleEmail = jwtDecode(google);
        return decode.email;
    }
}

