import * as fromPizzas from './pizzas.reducers';
import * as fromToppings from './toppings.reducers';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

export const getProductState = createFeatureSelector<ProductsState>('products');
