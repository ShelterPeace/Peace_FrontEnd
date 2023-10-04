import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = () => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Todo List</Text>
      <TextInput
        value={todo}
        onChangeText={setTodo}
        placeholder="Enter Todo..."
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;
