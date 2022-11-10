import type {NextPage} from 'next'
import * as React from "react";
import Image from 'next/image'
import styles from '../../styles/item.module.css'
import fonts from '../../styles/fonts.module.css'
import classNames from 'classnames/dedupe'
import {Allergies, Button, CategoryBtn, CategorySelector, IProduct, Sizes, Textarea, TopNavigation} from 'ui';
import { useState } from 'react';
import { AllergieCard } from 'ui/Components/Atoms/allergieCard';

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
            item: data as IProduct
        }
    }
}

interface PropTypes {
    item: IProduct
}

interface CartItem {
    items: Array<{
        id: string
        name: string
        quantity: number
    }>
}


const Item: NextPage<PropTypes> = ({ item }: PropTypes) => {

    function addToCart() : void{

        const cs = localStorage.getItem('order')
        let order:CartItem
        let isSameItem = false

        if (!cs){
                order = {
                    items:[{
                        id: item.id,
                        name: item.name,
                        quantity: 1
                    }]
            }
        }
        else {
            order = JSON.parse(cs)
            order.items = order.items.map(ci => {
                if (ci.id == item.id) {
                    isSameItem = true
                    return {id: ci.id,name: ci.name, quantity: ci.quantity + 1}
                }

                return {id: ci.id,name: ci.name, quantity: ci.quantity}
            })

            if (!isSameItem){
                order.items.push({
                    id: item.id,
                    name: item.name,
                    quantity: 1
                })
            }
        }

        localStorage.setItem('order', JSON.stringify(order))
        console.log('order', order)
    }

    // Placeholder data
    const price: number = item.price
    const title: string = item.name
    const description: string = item.description

    const allergies: string[] = item.allergies;

    // State - size
    const [size, setSize] = useState(Sizes.Small)

    return (
        <div id={styles.page}>
            <TopNavigation/>
            <div id={styles.imgWrap}>
                <img
                    src={item.image} className={styles.img}
                    alt={item.name}
                />
            </div>
            <p className={fonts.s_secondary}>{`€${price}`}</p>
            <p className={classNames(fonts.xl_primary, styles.title)}>{title}</p>
            <p className={classNames(fonts.m_secondary, styles.description)}>{description}</p>

            <div className={styles.optionWrap}>
                <CategorySelector label='Size'>
                    <CategoryBtn label='Small' active={size === Sizes.Small} onClick={() => setSize(Sizes.Small)}></CategoryBtn>
                    <CategoryBtn label='Medium' active={size === Sizes.Medium} onClick={() => setSize(Sizes.Medium)}></CategoryBtn>
                    <CategoryBtn label='Large' active={size === Sizes.Big} onClick={() => setSize(Sizes.Big)}></CategoryBtn>
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
                <Button onClick={addToCart()} label='Add to order' style='primary'/>
            </div>

        </div>
    )
}

export default Item
