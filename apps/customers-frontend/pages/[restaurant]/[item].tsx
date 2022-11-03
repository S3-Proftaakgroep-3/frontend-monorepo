import type {NextPage} from 'next'
import * as React from "react";
import Image from 'next/image'
import styles from '../../styles/item.module.css'
import fonts from '../../styles/fonts.module.css'
import classNames from 'classnames/dedupe'
import { Allergies, Button, CategoryBtn, CategorySelector, Textarea } from 'ui';
import { useState } from 'react';
import { AllergieCard } from 'ui/Components/Atoms/allergieCard';
import {ALL} from "dns";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant
    const itemId = query.item

    // Fetch
    const res = await fetch(`https://mdma-restaurant-service.herokuapp.com/api/restaurant/get/product?restaurantId=${restaurantId}&id=${itemId}`)
    const data = await res.json()

    return {
        props: {
            item: data
        }
    }
}

enum Sizes {
    small,
    medium,
    large
}

interface Item {
    active: boolean,
    category: string,
    description: string,
    id: string,
    name: string,
    price: number,
    size: string
    allergies: string[]
}

interface PropTypes {
    item: Item
}

const Item: NextPage<PropTypes> = ({ item }: PropTypes) => {

    // Placeholder data
    const price: number = item.price
    const title: string = item.name
    const description: string = item.description

    const allergies: string[] = item.allergies;

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
                    { allergies != null
                        ? allergies.map((allergy: string, key: number) => {
                            return <AllergieCard label={allergy} key={key}></AllergieCard>
                        })
                        : <p className={classNames(fonts.s_secondary)}>No allergies</p>
                    }
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
