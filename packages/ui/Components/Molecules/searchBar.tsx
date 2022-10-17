import styles from '../../Styles/Molecules/seachBar.module.css';

export const SearchBar = () => {
    return (
        <div className={styles.searchBarContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.151" height="19.144" viewBox="0 0 19.151 19.144"><path id="Path_39" data-name="Path 39" d="M101.056,30.066,96.487,25.5a7.854,7.854,0,1,0-1.095,1.091l4.565,4.565a.774.774,0,0,0,1.1-1.091Zm-4.343-9.515a6.266,6.266,0,1,1-6.266-6.266A6.273,6.273,0,0,1,96.713,20.552Z" transform="translate(-82.381 -12.49)" fill="#9a9a9a" stroke="#9a9a9a" strokeWidth="0.5"/></svg>
            <input className={styles.searchInput} type="text" placeholder={"Search..."}/>
        </div>
    )
}