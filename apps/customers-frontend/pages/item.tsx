import type {NextPage} from 'next'
import * as React from "react";
import Image from 'next/image'
import styles from '../styles/item.module.css'
import fonts from '../styles/fonts.module.css'
import classNames from "classnames/dedupe";
import { Allergies, Button, CategoryBtn, CategorySelector, Textarea } from 'ui';
import { useState } from 'react';
import { AllergieCard } from 'ui/Components/Atoms/allergieCard';

enum Sizes {
    small,
    medium,
    large
}

const Item: NextPage = () => {

    // Placeholder data
    const price: number = 15
    const title: string = "Pizza fungi"
    const description: string = "Krokante huisgemaakte pizza gemaakt met de beste lokale ingedriënten en deeg uit eigen keuken."

    // State - size
    const [size, setSize] = useState(Sizes.small)

    return (
        <div id={styles.page}>
            <div>Top navigation</div>
            <div id={styles.imgWrap}>
                <Image
                    src='/Images/pizza.jpg'
                    layout='fill'
                    objectFit='cover'
                    alt={"Pizza"}
                />
            </div>
            <p className={fonts.s_secondary}>{`€${price}`}</p>
            <p className={classNames(fonts.xl_primary, styles.title)}>{title}</p>
            <p className={classNames(fonts.m_secondary, styles.description)}>{description}</p>

            <div className={styles.optionWrap}>
                <CategorySelector label='Size'>
                    <CategoryBtn label='Small' active={size === Sizes.small} onClick={() => setSize(Sizes.small)}></CategoryBtn>
                    <CategoryBtn label='Medium' active={size === Sizes.medium} onClick={() => setSize(Sizes.medium)}></CategoryBtn>
                    <CategoryBtn label='Large' active={size === Sizes.large} onClick={() => setSize(Sizes.large)}></CategoryBtn>
                </CategorySelector>
            </div>

            <div className={styles.optionWrap}>
                <Allergies>
                    <AllergieCard label="Lactose"/>
                    <AllergieCard label="Gluten"/>
                </Allergies>
            </div>

            <div className={styles.optionWrap}>
                <Textarea id='message' label='Message' placeholder='Uw bericht...' rows={5} />
            </div>

            <div id={styles.bottomMenu}>
                <Button label='Add to order' style='primary'/>
            </div>

        </div>
    )
}

export default Item
