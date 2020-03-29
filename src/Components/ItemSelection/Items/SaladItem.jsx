import React from 'react'
import FoodItem from './FoodItem'

const saladSelections = [
    {
        type: "multi",
        options: ["Lettuce",
            "Spinach",
            "Kale"],
    },
    {
        type: "multi",
        options: ["Tomato",
            "Cucumber",
            "Onions",
            "Peppers",
            "Mushrooms",
            "Carrots"],
    },
    {
        type: "multi",
        options: ["Ranch Dressing",
        "Caesar Dressing",
        "Thousand Island Dressing",
        "Vinaigrette"]
    }
]

export default function SaladItem() {
    return (
        <FoodItem itemName="Salad" price={8} options={saladSelections}/>
    )
}