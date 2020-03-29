import React from 'react'
import FoodItem from './FoodItem'

const cakeSelections = [
    {
        type: "single",
        options: ["Chocolate base",
        "Vanilla base",
        "Red velvet base"],
    },
    {
        type: "single",
        options: ["Chocolate icing",
        "Vanilla icing",
        "Cream cheese icing"]
    }
]

export default function CakeItem() {
    return (
        <FoodItem itemName="Cake" price={6} options={cakeSelections}/>
    )
}