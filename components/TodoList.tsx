import React from "React";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./TodoItem";
import { colors } from "../assets/theme";

export interface Todo {
id: String;
title: String;
description: String;
}

export interface TodoListProps {
todos: Todo[];
onDeleteItem: (id: string) => void;


}

export function TodoList({ todos, onDeleteItem }: TodoListProps): React.JSX.Element {
  return (
    <View style={styles.todoListContainer}>
      <Text style={styles.todoSectionTitle}>Your Todos</Text>
      <FlatList
        alwaysBounceVertical={false}
        keyExtractor={(item: Todo): string => item.id}
        data={todos}
        renderItem={(itemData: ListRenderItemInfo<Todo>): React.JSX.Element => {
          return (
            // TODO: Update component props :check:
            <TodoItem
              id={itemData.item.id}
              title={itemData.item.title}
              description={itemData.item.description}
              onDeleteItem={() => onDeleteItem(itemData.item.id)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    marginTop: 20,
  },
  todoSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
});
