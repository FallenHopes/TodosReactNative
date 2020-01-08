import React, { useContext } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'
import { ItemTodo } from '../components/todos/ItemTodo'
import { SwitcherMain } from '../components/SwitcherMain'
import Context from '../Context'


export default function ListScreen() {
  const { todos, RemoveTodo, filter } = useContext(Context)
  return (
    <View>
      <SwitcherMain />
      <ScrollView style={styles.container}>
        {
          todos.length ?
          todos.filter(todo => todo.priority === filter).map(todo => {
            return <ItemTodo title={todo.title} priority={todo.priority} key={todo.key} deleteTodo={() => RemoveTodo(todo.key)}/>
          })
          :
          <Text style={styles.noTodos}>Нет задач</Text>
        }
      </ScrollView>
    </View>
  );
}

ListScreen.navigationOptions = {
  title: 'Все задачи',
  headerTintColor: 'white',
  headerStyle:{
    backgroundColor: 'black',
    fontWeight: 'bold'
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '85%'
  },
  noTodos:{
    marginVertical: '40%',
    fontSize: 20,
    textAlign: 'center'
  }
});
