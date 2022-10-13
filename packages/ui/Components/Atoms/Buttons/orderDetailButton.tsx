import styles from '../../../Styles/Atoms/orderDetailButton.module.css';

export const OrderDetailButton = () => {
    return (
        <button className={styles.buttonBackground}>
            <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="20%" height="100%" viewBox="0 0 6.959 12.173"><path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M13.348,12.279l4.606-4.6a.87.87,0,0,0-1.232-1.228L11.5,11.662a.868.868,0,0,0-.025,1.2l5.24,5.251a.87.87,0,0,0,1.232-1.228Z" transform="translate(-11.251 -6.194)"/></svg>
        </button>
    )
}