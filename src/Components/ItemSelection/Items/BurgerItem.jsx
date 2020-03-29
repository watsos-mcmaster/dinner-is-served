import React from 'react'
import FoodItem from './FoodItem'

const burgerSelections = [
    {
        type: "single",
        options: ["Beef Patty",
            "Veggie Patty",
            "Chicken Patty"],
    },
    {
        type: "multi",
        options: ["Cheddar Cheese",
        "Swiss Cheese",
        "Bacon",
        "Fried Egg",
        "Tomato",
        "Onion",
        "Pickle",
        "Lettuce"],
    },
    {
        type: "single",
        options: ["Pretzel Bun",
        "Sesame Bun",
        "Brioche Bun"]
    }
]

export default function BurgerItem() {
    return (
        <FoodItem itemName="Burger" price={11} options={burgerSelections}/>
    )
}