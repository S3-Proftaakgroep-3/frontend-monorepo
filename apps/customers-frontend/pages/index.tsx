import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { Allergies, CategoryBtn, CategorySelector, MenuBtn, DropdownMenu, SearchBar, BottomMenu, Textarea } from 'ui'
import { useState } from 'react';
import {FoodCard} from "ui/Components/Atoms/foodCard";
import {TopNavigation} from "ui/Components/Atoms/topNavigation";


enum Categories {
    Alles,
    Popular,
    Pasta,
    Pizza,
    Burgers
}

const Index: NextPage = () => {

    // State - Active category
    const [category, setCategory] = useState(Categories.Alles)

    // State - food or drinks selector
    const [isFood, setIsFood] = useState(true)

    return (
        <div className={styles.page}>
            <TopNavigation/>
            <br/>
            <SearchBar/>
            <br/>
            <h4>Categories</h4>
            <CategorySelector label={"Size"}>
                <CategoryBtn label='Alles' active={category === Categories.Alles} onClick={() => setCategory(Categories.Alles)}/>
                <CategoryBtn label='Popular' active={category === Categories.Popular} onClick={() => setCategory(Categories.Popular)}/>
                <CategoryBtn label='Pasta' active={category === Categories.Pasta} onClick={() => setCategory(Categories.Pasta)}/>
                <CategoryBtn label='Pizza' active={category === Categories.Pizza} onClick={() => setCategory(Categories.Pizza)}/>
                <CategoryBtn label='Burgers' active={category === Categories.Burgers} onClick={() => setCategory(Categories.Burgers)}/>
            </CategorySelector>
            <div>
            <FoodCard/>
            <FoodCard/>
            </div>
            <BottomMenu isFood={isFood} setIsFood={setIsFood}/>
        </div>
    )
}

export default Index
