import { TodoCard } from "./TodoCard";
export function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        const tempTodoIndex = todos.findIndex((val) => val.input == todo.input);

        return (
          <TodoCard
            key={todoIndex}
            todoIndex={tempTodoIndex}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
