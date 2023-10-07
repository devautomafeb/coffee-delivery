
import { createContext, ReactNode, useReducer } from "react";
import { Coffee, CoffeeType} from "../reducers/reducer";
import { coffeesReducer } from '../reducers/reducer';

const initialCoffeeState: CoffeeType = {
  coffees: [
    { id: '1023A112',
      name: 'Orfeo',
      price: 12.00,
      description: 'Gosto extremamente palatável',
      kind: 'with milk', }
  ],
};

/*shoppingCart: 10,*/

interface CoffeeContextTypeProps{
  coffee: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextTypeProps)

//interface que recebe ReactNode (componente) filho e o renderiza
interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {

  const [coffeeState, dispatch] = useReducer(coffeesReducer, initialCoffeeState);

  const contextValue = {
    coffee: coffeeState.coffees, // Provide the 'coffee' property with the correct type
  };

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  );
}

export function handleCoffee(coffee: Coffee) {
  const { id, name, price, description, kind } = coffee;
  const CoffeeToBeAdd = { id, name, price, description, kind };

  return CoffeeToBeAdd
}


/*export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {

  const [coffeeState, dispatch] = useReducer(coffeesReducer, initialCoffeeState);


  return (
    <CoffeeContext.Provider value={coffeeState.coffees}>
      {children}
    </CoffeeContext.Provider>
  )
}*/

/*export const mainReducer = (state: any, action: any) => ({
  coffees: coffeesReducer(state.coffees, action),
  shoppingCart: shoppingCartReducer(state.shoppingCart, action)
});*/

