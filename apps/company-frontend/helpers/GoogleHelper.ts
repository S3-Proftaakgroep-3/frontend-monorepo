import jwtDecode from "jwt-decode";

interface GoogleEmail {
    email: string
}

export default class GoogleHelper {


    /**
     * Check if the user logged in is the right one
     * @param google
     * @param restaurantId
     * @constructor
     */
    public async CheckIfLoggedIn(google: any, restaurantId: string): Promise<boolean> {
        // Check if Google is null
        if (google == null) {
            return false;
        }

        const decode: GoogleEmail = jwtDecode(google);

        if (decode.email != "") {
            const result = await fetch(`https://mdmaaccountservice.azurewebsites.net/api/account/check/${restaurantId}/${decode.email}`);
            return await result.json();
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

