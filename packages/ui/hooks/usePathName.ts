import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const usePathName = (index: number) => {

    // State
    const [pathName, setPathName] = useState<string | undefined>(undefined)

    // Router
    const router = useRouter()

    useEffect(() => {

        if (router.isReady) {
            setPathName(router.pathname.split('/')[index])
        }

    }, [router.isReady])

    return pathName
}