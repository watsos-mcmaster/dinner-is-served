import React from 'react'
import FoodItem from './FoodItem'

const coffeeSelections = [
    {
        type: "single",
        options: ["Light roast",
            "Medium roast",
            "Dark roast"],
    },
    {
        type: "single",
        options: ["2% Milk",
            "Cream",
            "Soy Milk"],
    },
    {
        type: "single",
        options: ["1 Sugar",
            "2 Sugars",
            "4 Sugars",
            "100 Sugars"]
    }
]

export default function CoffeeItem() {
    return (
        <FoodItem itemName="Coffee" price={2} options={coffeeSelections}/>
    )
}