import classNames from 'classnames';
import { useState } from 'react'
import styles from '../../../Styles/Company/Atoms/orderCardRow.module.css'

export const OrderCardRow = ({ dish }: {
    dish: {
        name: string;
        size: string;
        extras: string[];
        message: string;
    }
}) => {

    const { name, size, extras, message } = dish

    // State - Finished
    const [isFinished, setIsFinished] = useState(false)

    // State - expanded
    const [isExpanded, setIsExpanded] = useState(false)

    // onClick - ready button
    const handleFinishedBtn = () => {
        setIsFinished(true)
    }

    // onClick - expand button
    const handleExpandBtn = () => {
        setIsExpanded(isExpanded => !isExpanded)
    }

    return (
        <div id={styles.row}>

            {/* Name */}
            <div className={classNames(
                styles.nameSizeContainer, 
                isFinished && styles.nameSizeContainer__state_finished
            )}>
                <p id={styles.name}>{name}</p>
                <span id={styles.nameBlock}/>
                <p id={styles.size}>{size}</p>
            </div>

            {/* Button */}
            <div id={styles.btnContainer}>
                {
                    isFinished
                    ? <button onClick={handleExpandBtn} id={styles.expandBtn} className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.208" height="5.265" viewBox="0 0 9.208 5.265"><path d="M10.793,14.924l3.482-3.484a.655.655,0,0,1,.929,0,.664.664,0,0,1,0,.932L11.259,16.32a.657.657,0,0,1-.907.019L6.379,12.375a.658.658,0,1,1,.929-.932Z" transform="translate(-6.188 -11.246)"/></svg>
                    </button>
                    : <button onClick={handleFinishedBtn} id={styles.readyBtn} className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.564" height="10.336" viewBox="0 0 13.564 10.336"><path d="M4.221,13.663.182,9.624a.621.621,0,0,1,0-.879l.879-.879a.621.621,0,0,1,.879,0L4.66,10.587l5.828-5.828a.621.621,0,0,1,.879,0l.879.879a.621.621,0,0,1,0,.879L5.1,13.663A.621.621,0,0,1,4.221,13.663Z" transform="translate(0.568 -4.077)" stroke="#27f394" strokeWidth={1}/></svg>
                    </button>
                }
            </div>

            {/* Info */}
            {
                (!isFinished || isExpanded) &&
                <div id={styles.infoContainer}>

                    {/* Extras */}
                    <div id={styles.extrasContainer}>
                        {
                            extras && extras.length > 0 &&
                            extras.map((extra: string, index: number) => {
                                return (
                                    <div id={styles.extraWrap} key={extra}>
                                        <p id={styles.index}>{index + 1}.</p>
                                        <p>{extra}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Message */}
                    <div id={styles.messageWrap}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.817" height="8.817" viewBox="0 0 8.817 8.817"><g transform="translate(-658.5 -140)"><path d="M12.317,9.712a.869.869,0,0,1-.869.869H6.237L4.5,12.317V5.369A.869.869,0,0,1,5.369,4.5h6.08a.869.869,0,0,1,.869.869Z" transform="translate(654.5 136)" fill="none" stroke="#20f" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}/><path d="M-19154.076-13741.918l.383-7.257h7.223v5.548l-6.141.244Z" transform="translate(19813 13890)" fill="#20f"/></g></svg>
                        <p id={styles.message}>{message}</p>
                    </div>
                </div>
            }
        </div>
    )
}