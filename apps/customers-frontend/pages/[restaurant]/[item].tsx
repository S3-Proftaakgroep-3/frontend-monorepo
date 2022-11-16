import type {NextPage} from 'next'
import * as React from "react";
import Image from 'next/image'
import styles from '../../styles/item.module.css'
import fonts from '../../styles/fonts.module.css'
import classNames from 'classnames/dedupe'
import {Allergies, Button, CategoryBtn, CategorySelector, IProduct, Sizes, Textarea, TopNavigation} from 'ui';
import { useState } from 'react';
import { AllergieCard } from 'ui/Components/Atoms/allergieCard';
import {ICartItem} from "ui/Interfaces/ICartItem";

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

const Item: NextPage<PropTypes> = ({ item }: PropTypes) => {
    let order = [] as ICartItem[]

    function addToCart() {
        let cartItem: ICartItem
        order = JSON.parse(localStorage.getItem("order")!)
        
        if (order == null) {
            order = [];
        }
        
        cartItem = {
            name: item.name,
            price: item.price,
            message: message,
            size: size,
            quantity: 1
        }
        
        let sameProductFound: boolean = false;
        let sameProductIndex: number = 0;
        
        if (order.length > 0) {
            for (let i = 0; i < order.length; i++) {
                if (cartItem.name == order[i].name && cartItem.size == order[i].size && cartItem.price == order[i].price && cartItem.message == order[i].message) {
                    sameProductFound = true;
                    sameProductIndex = i;
                }
            }
        }
        
        if (sameProductFound) {
            order[sameProductIndex].quantity += 1;
        } else {
            order?.push(cartItem)
        }
        
        localStorage.setItem("order", JSON.stringify(order));
    }

    // Placeholder data
    const price: number = item.price
    const title: string = item.name
    const sizes: string[] = item.sizes
    const description: string = item.description

    const allergies: string[] = item.allergies;

    // State - size
    const [size, setSize] = useState(sizes[0])
    const [message, setMessage] = useState("")

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
                    {
                        sizes.map((possibleSize: string, key: number) => {
                            if (key == 0) {
                                return <CategoryBtn key={key} label={possibleSize} active={size === possibleSize} onClick={() => setSize(possibleSize)}></CategoryBtn>
                            } else {
                                return <CategoryBtn key={key} label={possibleSize} active={size === possibleSize} onClick={() => setSize(possibleSize)}></CategoryBtn>
                            }
                        })
                    }
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
                <Textarea onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMessage(e.target.value)
                }}
                id='message' label='Message' placeholder='Uw bericht...' rows={5} />
            </div>

            <div id={styles.bottomMenu}>
                <Button onClick={() => {addToCart()}} label='Add to order' style='primary'/>
            </div>

        </div>
    )
}

export default Item
