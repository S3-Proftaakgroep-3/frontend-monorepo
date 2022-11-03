import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as React from "react";
import { Allergies, CategoryBtn, CategorySelector, MenuBtn, DropdownMenu, SearchBar, BottomMenu, Textarea, TopNavigation } from 'ui'
import { useEffect, useState } from 'react';
import {FoodCard} from "ui/Components/Atoms/foodCard";
import { useRouter } from 'next/router';
import item from "./[item]";

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
            restaurant: data as Restaurant
        }
    }
}
  
interface Category {
    category: string,
    beverage: boolean
}

interface Restaurant {
    id: string,
    name: string,
    menu: Menu,
    categories: Category[]
}

interface Menu{
    products: Product[]
}

interface Product{
    id: string,
    name: string,
    image: string,
    description: string,
    price: number,
    size: Size,
    category: string,
    active: boolean,
    isBeverage: boolean,
    allergies: string[]
}

enum Size {
    Small,
    Medium,
    Big
}

interface PropTypes {
    restaurant: Restaurant
}

const Index: NextPage<PropTypes> = ({ restaurant }: PropTypes) => {
    // Restaurant data
    const allItems = restaurant.menu?.products;
    const [items, setItems] = useState(restaurant.menu?.products)
    const categories: Category[] = restaurant.categories

    console.log(categories)

    // State - Active category
    const [category, setCategory] = useState("Alles")

    // State - food or drinks selector
    const [isBeverage, setIsBeverage] = useState(false)

    // State - restaurant id
    const [restaurantId, setRestaurantId] = useState('')

    // State - searchbar text
    const [inputValue, setInputValue] = useState("");
    
    // Router
    const router = useRouter()

    useEffect(() => {

        const filteredItem = allItems.filter((el: Product) => {
            if (inputValue === '') {
                return allItems;
            }
            else {
                return el.name.toLowerCase().includes(inputValue.toLowerCase())
            }
        })
        setItems(filteredItem);
    }, [inputValue]);

    useEffect(() => {
        const tempRestaurantId = router.query.restaurant

        if (typeof tempRestaurantId === 'string'){
            setRestaurantId(tempRestaurantId)
        }
    }, [router.query])

    return (
        <div className={styles.page}>
            <TopNavigation/>

            <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
            }}/>
            
            {/* Category selector */}
            <CategorySelector label='Categorieën'>
                <CategoryBtn label="Alles" active={category === "Alles"} onClick={() => setCategory("Alles")}/>
                {
                    categories?.map((categorie: Category, key: number) => {

                        // Beverage categories
                        if(isBeverage && categorie.beverage){
                            return <CategoryBtn label={categorie.category} active={category === categorie.category} onClick={() => setCategory(categorie.category)} key={key}/>
                        } else if (!isBeverage && !categorie.beverage){ // Food categories
                            return <CategoryBtn label={categorie.category} active={category === categorie.category} onClick={() => setCategory(categorie.category)} key={key}/>
                        }
                        
                    })
                }
            </CategorySelector>

            {/* Food cards */}
            <div id={styles.foodCardContainer}>
                {
                    category === "Alles"
                    ?   items?.map((item: Product, index: number) => {

                            // Is beverage
                            if(isBeverage && item.isBeverage) {
                                return <FoodCard name={item.name} image={item.image} description={item.description} key={index} onClick={() => router.push(`/${restaurantId}/${item.id}`)}/>
                            } else if (!isBeverage && !item.isBeverage) { // Is food
                                return <FoodCard name={item.name} image={item.image} description={item.description} key={index} onClick={() => router.push(`/${restaurantId}/${item.id}`)}/>
                            }
                            
                        })

                    :   items?.map((item: Product, index: number) => {
                            if(item.category === category){
                                return <FoodCard name={item.name} image={item.image} description={item.description} key={index} onClick={() => router.push(`/${restaurantId}/${item.id}`)}/>
                            }
                        })
                }
            </div>
            <BottomMenu isBeverage={isBeverage} setIsBeverage={setIsBeverage}/>
        </div>
    )
}

export default Index
