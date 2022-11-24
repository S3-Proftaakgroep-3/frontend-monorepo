import classNames from 'classnames/dedupe'
import { useEffect, useState } from 'react'
import styles from '../../../Styles/Company/Atoms/navBar.module.css'

export const NavBar = () => {

    // State - current time
    const [time, setTime] = useState<string>('00:00')

    // Fn - get time
    const getTime = (): string => {
        const date = new Date();
        const HH = date.getHours();
        const MM = date.getMinutes();
        const time = String(`${HH}:${MM}`)
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
                    <li className={ classNames(
                        styles.link,
                        styles.link__state_active
                    )}>In Progress</li>
                    <li className={styles.link}>Ready</li>
                </ul>
                <p id={styles.time}>{time}</p>
            </nav>
        </header>
    )
}