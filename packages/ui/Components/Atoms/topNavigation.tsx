import * as React from "react";
import styles from "../../Styles/Atoms/topNavigation.module.css"
import classNames from "classnames/dedupe";
import {useLocalStorage} from "usehooks-ts";

export const TopNavigation = ({
    viewOptionVisible
}: {
    viewOptionVisible?: boolean
}) => {
    const [isCompactView, setIsCompactView] = useLocalStorage("menuView", false)
    
    const changeView = () => {
        if (!isCompactView) {
            setIsCompactView(true)
        } else {
            setIsCompactView(false)
        }
    }
    
    return (
        <div id={styles.container}>
            <div className={classNames(styles.menuBtnWrap, !viewOptionVisible && styles.viewHidden)}>
                <div onClick={changeView} className={classNames(styles.viewBackground, !isCompactView && styles.viewHidden)}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 11q-.825 0-1.413-.588Q3 9.825 3 9V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v4q0 .825-.587 1.412Q19.825 11 19 11Zm0-2h14V5H5v4Zm0 12q-.825 0-1.413-.587Q3 19.825 3 19v-4q0-.825.587-1.413Q4.175 13 5 13h14q.825 0 1.413.587Q21 14.175 21 15v4q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14v-4H5v4ZM5 5v4-4Zm0 10v4-4Z"/></svg>
                </div>
                <div onClick={changeView} className={classNames(styles.viewBackground, isCompactView && styles.viewHidden)}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm2-2h12l-3.75-5-3 4L9 12Zm-2 2V6v12Z"/></svg>
                </div>
            </div>
            <div id={styles.imgWrap}>
                <img src="https://www.sosfactory.com/wp-content/uploads/2016/12/restaurant-logo-mr-bolat.png" alt=""/>
            </div>
        </div>
    )
}
