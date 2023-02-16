interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, S> = { [P in Exclude<keyof T, S>]: T[P] };

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
