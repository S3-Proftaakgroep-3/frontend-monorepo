import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { CategoryBtn, CategorySelector, MenuBtn, DropdownMenu, Button, BottomMenu } from 'ui'
import { useState } from 'react';

enum Categories {
    Alles,
    Popular,
    Pasta,
    Pizza,
    Burgers
}

const Mike: NextPage = () => {

    // State - Active category
    const [category, setCategory] = useState(Categories.Alles)

    // State - menu active
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={styles.container}>
            <CategorySelector>
                <CategoryBtn label='Alles' active={category === Categories.Alles} onClick={() => setCategory(Categories.Alles)}/>
                <CategoryBtn label='Popular' active={category === Categories.Popular} onClick={() => setCategory(Categories.Popular)}/>
                <CategoryBtn label='Pasta' active={category === Categories.Pasta} onClick={() => setCategory(Categories.Pasta)}/>
                <CategoryBtn label='Pizza' active={category === Categories.Pizza} onClick={() => setCategory(Categories.Pizza)}/>
                <CategoryBtn label='Burgers' active={category === Categories.Burgers} onClick={() => setCategory(Categories.Burgers)}/>
            </CategorySelector>
            <DropdownMenu menuActive={menuActive}/>
            <MenuBtn menuActive={menuActive} setMenuActive={setMenuActive}/>
            <Button label='MyButton' style="primary"/>
            <BottomMenu/>
        </div>
    )
}

export default Mike
