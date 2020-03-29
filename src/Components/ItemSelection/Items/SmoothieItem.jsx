import React from 'react'
import FoodItem from './FoodItem'

const saladSelections = [
    {
        type: "multi",
        options: ["Yogurt",
            "Ice",
            "Milk",
            "Apple Juice",
            "Orange Juice",
            "Pineapple Juice"],
    },
    {
        type: "multi",
        options: ["Banana",
            "Kiwi",
            "Strawberry",
            "Blueberry",
            "Watermelon",
            "Raspberry",
            "Orange",
            "Pineapple",
            "Apple",
            "Avocado",
            "Kale"],
    }
]

export default function SmoothieItem() {
    return (
        <FoodItem itemName="Smoothie" price={8} options={saladSelections}/>
    )
}