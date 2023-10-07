import { useContext } from "react"
import { CoffeeContext } from "../../../context/CoffeeContext"

export function Checkout(){

    const coffeeChecked = useContext(CoffeeContext)

    return(
        <div>
            <h1>Checkout</h1>
            <h2>{}</h2>
        </div>
    )
}