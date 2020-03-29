import React from 'react'
import FoodItem from './FoodItem'

const icecreamSelections = [
    {
        type: "multi",
        options: ["Vanilla",
            "Chocolate",
            "Strawberry",
            "Mint Chocolate Chip",
            "Rocky Road",
            "Praline Pecan",
            "Cookie Dough"],
    }
]

export default function IceCreamItem() {
    return (
        <FoodItem itemName="Ice Cream" price={5} options={icecreamSelections}/>
    )
}