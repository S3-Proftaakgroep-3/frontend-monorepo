import type {NextPage} from 'next'
import styles from '../../styles/error.module.css'
import fonts from '../../styles/fonts.module.css'
import * as React from "react";
import {TopNavigation} from 'ui'

const Index: NextPage<null> = () => {
    return (
        <div className={styles.page}>
            <TopNavigation viewOptionVisible={false}/>
            <p className={fonts.xl_primary}>Something went wrong!</p>
            <p className={fonts.m_secondary}>If this keeps happening please contact a developer!</p>
        </div>
    )
}

export default Index
