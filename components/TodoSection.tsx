import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";
import { useState } from "react";

type Todo = {
  id: string;
  text: string;
}

export function TodoSection() {
  // TODO (state): Declare todos as state
const [todos, setTodos] = useState([
    { id: "1", text: "Learn useState"},
    { id: "2", text: "Practice typescript refactoring"},
  ]);

  const addTodoItem = (text: string): void => {
    const newTodo = { id: generateId(), text};
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoItem = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.todoSection}>
      <TodoInput onAddTodo={addTodoItem} />
      <TodoList todos={todos} onDeleteItem={deleteTodoItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoSection: {
    padding: 20,
  },
});
