export interface Todo {
  id: number;
  todo: string;
}

export enum BUTTON_TYPES {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export enum BUTTON_TITLE {
  ADD = "Add",
  DELETE = "Delete",
}

export enum BUTTON_COLOR {
  ADD = "var(--blue)",
  ADD_HOVER = "var(--blue-hover)",
  DELETE = "var(--red)",
  DELETE_HOVER = "var(--red-hover)",
}
