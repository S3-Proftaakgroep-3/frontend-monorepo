import type {NextPage} from 'next'
import * as React from "react";
import {useState} from "react";
import styles from '../../styles/item.module.css'
import fonts from '../../styles/fonts.module.css'
import classNames from 'classnames/dedupe'
import {Allergies, Button, CategoryBtn, CategorySelector, IExtra, IProduct, Textarea, TopMenuBackLogo} from 'ui';
import {AllergieCard} from 'ui/Components/Atoms/allergieCard';
import {ICartItem} from "ui/Interfaces/ICartItem";
import toast from 'react-hot-toast';
import {useRouter} from "next/router";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {
    try {
        const restaurantId = query.restaurant
        const itemId = query.item

        const res = await fetch(`https://mdmarestaurantservice.azurewebsites.net/api/restaurant/get/product?restaurantId=${restaurantId}&id=${itemId}`)
        const data = await res.json()

        return {
            props: {
                item: data as IProduct
            }
        }
    } catch {
        return {
            redirect: {
                destination: "/error"
            }
        }
    }
}

interface PropTypes {
    item: IProduct
}

const Item: NextPage<PropTypes> = ({ item }: PropTypes) => {
    const router = useRouter();
    let order = [] as ICartItem[];

    // State - size
    const [size, setSize] = useState(item.sizes[0]);
    const [message, setMessage] = useState("");
    const [extras, setExtras] = useState<IExtra[]>([])
    
    const [quantity, setQuantity] = useState(1)

    const addToCart = () => {
        let cartItem: ICartItem
        order = JSON.parse(localStorage.getItem("order")!)
        
        if (order == null) {
            order = [];
        }
        
        cartItem = {
            name: item.name,
            price: item.price,
            message: message,
            extras: extras,
            size: size,
            quantity: quantity
        }
        
        if (cartItem.extras != null) {
            for (let i = 0; i < cartItem.extras!.length; i++) {
                cartItem.price += cartItem.extras[i].price;
            }
        }
        
        let sameProductFound: boolean = false;
        let sameProductIndex: number = 0;
        
        if (order.length > 0) {
            for (let i = 0; i < order.length; i++) {
                if (cartItem.name == order[i].name && cartItem.size == order[i].size && cartItem.price == order[i].price && cartItem.message == order[i].message) {
                    if (JSON.stringify(order[i].extras) == JSON.stringify(cartItem.extras)) {
                        sameProductFound = true;
                        sameProductIndex = i;
                    }
                }
            }
        }
        
        if (sameProductFound) {
            order[sameProductIndex].quantity += quantity;
        } else {
            order?.push(cartItem)
        }
        
        localStorage.setItem("order", JSON.stringify(order));
        router.back();
        notify(cartItem.name);
    }
    
    const addExtraOptions = (extra: IExtra) => {
        const alreadyIn = checkIfExtraAlreadyIn(extra);

        if (!alreadyIn) {
            setExtras([...extras, extra])
        } else {
            setExtras(extras.filter(item => item != extra))
        }
    }
    
    const checkIfExtraAlreadyIn = (extra: IExtra) => {
        let alreadyIn: boolean = false;
        if (extras.length > 0) {
            for (let i = 0; i < extras.length; i++) {
                if (extras[i].name == extra.name) {
                    alreadyIn = true;
                }
            }
        }
        return alreadyIn;
    }

    const notify = (item: string) => {
        toast.success(`Added ${item} to order.`);
    }

    return (
        <div id={styles.page}>
            <TopMenuBackLogo/>
            
            {/*Item info*/}
            <div id={styles.imgWrap}>
                <img
                    src={item.image} className={styles.img}
                    alt={item.name}
                />
            </div>
            <p className={classNames(fonts.xl_primary, styles.title)}>{item.name}</p>
            <p className={classNames(fonts.m_secondary, styles.description)}>{item.description}</p>
            <p className={classNames(styles.price)}>{`€${item.price.toFixed(2)}`}</p>

            {/*Size options sections*/}
            <div className={styles.optionWrap}>
                <CategorySelector label='Size'>
                    {
                        item.sizes.map((possibleSize: string, key: number) => {
                            return <CategoryBtn key={key} label={possibleSize} active={size === possibleSize} onClick={() => setSize(possibleSize)}></CategoryBtn>
                        })
                    }
                </CategorySelector>
            </div>

            {/*Extra options section*/}
            <div className={styles.optionWrap}>
                {
                    item.extras != null &&
                    <CategorySelector label='Extra options'>
                        {
                            item.extras.map((extra: IExtra, key: number) => {
                                return <CategoryBtn key={key} label={extra.name + " + €" + extra.price.toFixed(2)} active={extras.includes(extra)} onClick={() => {addExtraOptions(extra)}}></CategoryBtn>
                            })
                        }
                    </CategorySelector>
                }
            </div>

            {/*Allergies sections*/}
            <div className={styles.optionWrap}>
                <Allergies>
                    { item.allergies != null
                        ? item.allergies.map((allergy: string, key: number) => {
                            return <AllergieCard label={allergy} key={key}></AllergieCard>
                        })
                        : <p className={classNames(fonts.s_secondary)}>No allergies</p>
                    }
                </Allergies>
            </div>

            {/*Message section*/}
            <div className={styles.optionWrap}>
                <Textarea onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMessage(e.target.value)
                }}
                id='message' label='Message' placeholder='Uw bericht...' rows={5} />
            </div>

            {/*Bottom menu*/}
            <div id={styles.bottomMenu}>
                <Button onClick={() => {addToCart()}} label='Add to order' style='primary'/>
                <input className={classNames(styles.numberInput, fonts.m_secondary)} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} type={"number"}/>
                <div className={styles.buttonContainer}>
                    <Button onClick={() => {setQuantity(quantity + 1)}} label={"+"} style={"secondary"}/>
                    <Button onClick={() => {quantity - 1 > 0 && setQuantity(quantity - 1)}} label={"-"} style={"secondary"}/>
                </div>
            </div>

        </div>
    )
}

export default Item
