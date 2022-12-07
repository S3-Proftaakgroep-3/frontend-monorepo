import classNames from 'classnames/dedupe'
import { useEffect, useState } from 'react'
import styles from '../../../Styles/Company/Atoms/navBar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const NavBar = () => {
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
            
            setRestaurantId(restaurantId);

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

    return (
        <header id={styles.header}>
            <nav id={styles.nav}>
                <ul id={styles.ul}>
                    <li className={ classNames(styles.link, isInProgress && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/progress`}>In Progress</Link></li>
                    <li className={ classNames(styles.link, isReady && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/ready`}>Ready</Link></li>
                    <li className={ classNames(styles.link, isReceived && styles.link__state_active)}><Link href={`/${restaurantId}/dashboard/received`}>Received</Link></li>
                </ul>
                <p id={styles.time}>{time}</p>
            </nav>
        </header>
    )
}