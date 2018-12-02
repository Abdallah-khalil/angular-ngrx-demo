import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZA = '[Products] load pizzas';
export const LOAD_PIZZA_FAIL = '[Products] load pizzas failed';
export const LOAD_PIZZA_SUCCESS = '[Products] load pizzas succeed';

// create Pizza
export const CREATE_PIZZA = '[Products] create pizza';
export const CREATE_PIZZA_SUCCESS = '[Products] create pizza success';
export const CREATE_PIZZA_FAIL = '[Products] create pizza fails';

// Update Pizza
export const UPDATE_PIZZA = '[Products] update pizza';
export const UPDATE_PIZZA_SUCCESS = '[Products] update pizza success';
export const UPDATE_PIZZA_FAIL = '[Products] update pizza fails';

// remove pizza
export const REMOVE_PIZZA = '[Products] remove pizza';
export const REMOVE_PIZZA_SUCCESS = '[Products] remove pizza success';
export const REMOVE_PIZZA_FAIL = '[Products] remove pizza fails';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZA;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZA_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// create pizza
export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

// action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaSuccess
  | CreatePizzaFail
  | UpdatePizza
  | UpdatePizzaSuccess
  | UpdatePizzaFail
  | RemovePizza
  | RemovePizzaSuccess
  | RemovePizzaFail;
