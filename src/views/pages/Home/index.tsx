import { useContext } from "react"
import { CoffeeContext } from "../../../context/CoffeeContext"

export function Home() {

    const actutalCoffe = useContext(CoffeeContext)

    return (
            <div>
                <h2>Tipo de café: {actutalCoffe.coffee[0].name}</h2>
            </div>
    )
}