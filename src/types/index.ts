export interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

export interface TodosCType {
  todos: Todo[];
  updateTodo: any;
  removeTodo: any;
  filtre: string;
}

export interface EditTodoCType {
  todo: Todo;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  updateTodo: (id: number, key: string, value: any) => void;
}

export interface TodoCType {
  todo: Todo;
  updateTodo: (id: number, key: string, value: any) => void;
  removeTodo: (id: number, todoRef: React.MutableRefObject<HTMLLIElement>) => void;
}

export interface IllustrationCType {
  text: string;
  img: string;
  show: boolean;
}
