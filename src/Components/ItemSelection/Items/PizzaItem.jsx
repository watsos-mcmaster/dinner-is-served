import React from 'react'
import FoodItem from './FoodItem'

const pizzaSelections = [
    {
        type: "single",
        options: ["Regular Crust",
            "Thin Crust",
            "Stuffed Crust"],
    },
    {
        type: "single",
        options: ["Red Sauce",
            "Pesto",
            "BBQ Sauce",
            "White Sauce"],
    },
    {
        type: "multi",
        options: ["Pepperoni",
            "Italian Sausage",
            "Chicken",
            "Onion",
            "Roasted Garlic",
            "Red Peppers",
            "Olives",
            "Mushrooms"]
    }
]

export default function PizzaItem() {
    return (
        <FoodItem itemName="Pizza" price={13} options={pizzaSelections}/>
    )
}