import React from 'react'
import FoodItem from './FoodItem'

const martiniSelections = [
    {
        type: "single",
        options: ["Gin",
            "Vodka"],
    },
    {
        type: "single",
        options: ["Sweet Vermouth",
            "Dry Vermouth"],
    },
    {
        type: "single",
        options: ["Regular olives",
            "No olives",
            "Extra olives",
            "Just a glass of olives"]
    }
]

export default function MartiniItem() {
    return (
        <FoodItem itemName="Martini" price={16} options={martiniSelections}/>
    )
}