import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  DELETE_NEW_COFFEE = 'DELETE_NEW_COFFEE',
  MARK_KIND_COFFEE = 'MARK_KIND_COFFEE',
  SHOPPING_ADD_COFFEE = 'SHOPPING_ADD_COFFEE',
  SHOPPING_DEL_COFFEE = 'SHOPPING_DEL_COFFEE',
}

export function addNewCoffeeAction(newCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function delNewCoffeeAction(newCoffee: Coffee) {
    return {
      type: ActionTypes.DELETE_NEW_COFFEE,
      payload: {
        newCoffee,
      },
    }
  }
