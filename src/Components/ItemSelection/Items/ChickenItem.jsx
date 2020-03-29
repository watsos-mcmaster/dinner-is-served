import React from 'react'
import FoodItem from './FoodItem'

const chickenSelections = [
    {
        type: "single",
        options: ["Thigh",
            "Drumstick",
            "Breast",
            "Combo"],
    },
    {
        type: "single",
        options: ["Well done",
            "Golden brown"],
    }
]

export default function ChickenItem() {
    return (
        <FoodItem itemName="Fried Chicken" price={9} options={chickenSelections}/>
    )
}