import React from 'react'
import FoodItem from './FoodItem'

const beerSelections = [
    {
        type: "single",
        options: ["Tap",
            "Bottle",
            "Can"],
    },
    {
        type: "single",
        options: ["IPA",
        "Sour",
        "Stout",
        "Porter",
        "Lager",
        "Ale",
        "Surprise me"],
    }
]

export default function BeerItem() {
    return (
        <FoodItem itemName="Beer" price={6} options={beerSelections}/>
    )
}