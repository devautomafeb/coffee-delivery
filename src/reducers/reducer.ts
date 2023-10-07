/*reducers.ts*/
import { ActionTypes } from "./actions";

export interface Coffee {
  id: string
  name: string
  price: number
  description: string
  kind: string
}

export interface CoffeeType {
  coffees: Coffee[]
  //shoppingCart: number | 0;
}

const initialCoffeeState: CoffeeType = {
  coffees: [],
};

export function coffeesReducer(state: CoffeeType, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return {
        ...state,
        coffees: [
          ...state.coffees,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            description: action.payload.description,
            kind: action.payload.kind,
          }
        ]
      };
    case ActionTypes.DELETE_NEW_COFFEE:
      return {
        ...state,
        coffees: state.coffees.filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
}

interface shoppingCoffe {
  coffesSelected: CoffeeType[];
  numberOfCoffes: number | string;
}

export function shoppingCoffeReducer(state: shoppingCoffe, action:any) {
  switch (action.type) {
    case ActionTypes.SHOPPING_ADD_COFFEE:
      return {
        coffesSelected:[coffesSelected.push(action.payload.newCoffe)]
      };
    case ActionTypes.SHOPPING_DEL_COFFEE:
  return {
    ...state,
    coffees: state.coffees.filter(product => product.id !== state.coffees.id)
  };
    default:
  return state
  break;
}
}