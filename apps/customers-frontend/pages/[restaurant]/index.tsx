import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import { Allergies, CategoryBtn, CategorySelector, MenuBtn, DropdownMenu, SearchBar, BottomMenu, Textarea } from 'ui'
import { useEffect, useState } from 'react';
import {FoodCard} from "ui/Components/Atoms/foodCard";
import { useRouter } from 'next/router';

interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant

    // Fetch
    const res = await fetch(`https://mdma-restaurant-service.herokuapp.com/api/restaurant/get?id=${restaurantId}`)
    const data = await res.json()

    return {
        props: {
            items: data.menu.products
        }
    }
}
  

enum Categories {
    Alles,
    Popular,
    Pasta,
    Pizza,
    Burgers
}

interface Item {
    active: boolean,
    category: string,
    description: string,
    id: string,
    name: string,
    price: number,
    size: string
}

interface PropTypes {
    items: Item[]
}

const Index: NextPage<PropTypes> = ({ items }: PropTypes) => {

    // State - Active category
    const [category, setCategory] = useState(Categories.Alles)

    // State - menu active
    const [menuActive, setMenuActive] = useState(false)

    // State - food or drinks selector
    const [isFood, setIsFood] = useState(true)

    // Router
    const router = useRouter()

    // Restaurant id
    let restaurantId: string | string[]
    useEffect(() => {
        const query = router.query
        restaurantId = query.restaurant!
    }, [router.query])

    return (
        <div className={styles.page}>
            <div>
                <DropdownMenu menuActive={menuActive}/>
                <MenuBtn menuActive={menuActive} setMenuActive={setMenuActive}/>
            </div>
            <SearchBar/>
            <CategorySelector label='Categoriën'>
                <CategoryBtn label='Alles' active={category === Categories.Alles} onClick={() => setCategory(Categories.Alles)}/>
                <CategoryBtn label='Popular' active={category === Categories.Popular} onClick={() => setCategory(Categories.Popular)}/>
                <CategoryBtn label='Pasta' active={category === Categories.Pasta} onClick={() => setCategory(Categories.Pasta)}/>
                <CategoryBtn label='Pizza' active={category === Categories.Pizza} onClick={() => setCategory(Categories.Pizza)}/>
                <CategoryBtn label='Burgers' active={category === Categories.Burgers} onClick={() => setCategory(Categories.Burgers)}/>
            </CategorySelector>
            <div id={styles.foodCardContainer}>
                {
                    items.map((item: Item, index: number) => {
                        return <FoodCard name={item.name} description={item.description} key={index} onClick={() => router.push(`/${restaurantId}/${item.id}`)}/>
                    })
                }
            </div>
            <BottomMenu isFood={isFood} setIsFood={setIsFood}/>
        </div>
    )
}

export default Index
