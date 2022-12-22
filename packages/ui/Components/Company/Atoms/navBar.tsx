import classNames from 'classnames/dedupe'
import { useEffect, useState } from 'react'
import styles from '../../../Styles/Company/Atoms/navBar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const NavBar = ({email, handleLogout}: any) => {
    // Router
    const router = useRouter()

    // State - pathname
    const [isInProgress, setIsInProgress] = useState<boolean>(false)
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isReceived, setIsReceived] = useState<boolean>(false)
    const [restaurantId, setRestaurantId] = useState("")

    useEffect(() => {
        // If router is ready
        if (router.isReady) {
            // Pathname
            const pathName = router.pathname.split('/')[3]

            // Set is in progress
            setIsInProgress(pathName === 'progress')

            // Set is ready
            setIsReady(pathName === 'ready')

            // Set is received
            setIsReceived(pathName === 'received')

            const path = Array.isArray(router.query.restaurant) ? router.query.restaurant[0] : router.query.restaurant
            
            if (path) {
                setRestaurantId(path)
            }
        }
    }, [router.isReady])

    // State - current time
    const [time, setTime] = useState<string>('00:00')

    // Fn - get time
    const getTime = (): string => {
        const date = new Date();
        const HH = date.getHours();
        const MM = date.getMinutes();

        // If minutes is a single diggit, append 0
        let time: string

        if (MM < 10) {
            time = `${HH}:0${MM}`
        } else {
            time = `${HH}:${MM}`
        }

        
        return time
    }

    // Update time every 5 seconds
    useEffect(() => { 

        // Get initial time
        const currentTime = getTime()
        setTime(currentTime)

        setInterval(() => {
            const time = getTime()
            setTime(time)
        }, 5000)
    }, [])

    function logOut(){
        localStorage.removeItem("google");
    }

    return (
        <header id={styles.header}>
            <nav id={styles.nav}>
                <p id={styles.email}>{email} <strong id={styles.logout} onClick={event => handleLogout(100)}>Log Out</strong></p>
                <ul id={styles.ul}>
                    {
                        restaurantId != "" &&
                        <div>
                            <li className={ classNames(styles.link, isInProgress && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/progress`}>In Progress</Link></li>
                            <li className={ classNames(styles.link, isReady && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/ready`}>Ready</Link></li>
                            <li className={ classNames(styles.link, isReceived && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/received`}>Received</Link></li>
                        </div>
                    }
                </ul>
                <Link href={`/${restaurantId}/settings`}>
                    <svg id={styles.settings} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </Link>

                <p id={styles.time}>{time}</p>
            </nav>
        </header>
    )
}