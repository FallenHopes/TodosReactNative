import React, { useState, useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import Context from './Context'
import { AsyncStorage } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    GetStorage = async () => {
      await AsyncStorage.getItem('todos', (err, res) => {
        if (err) console.log(err)
        if (res !== null){
          setTodos(JSON.parse(res))
        }
        else{
          setTodos([])
        }
      })
    }
    GetStorage()
  }, [])
  const [filter, setFilter] = useState('Высокий')
  const AddTodo = async (title, priority) => {
    let newKey
    if (todos.length > 0){
      newKey = todos[todos.length - 1].key + 1
    }
    else{
      newKey = 1
    }
    let newTodo = {
      key: newKey,
      title,
      priority
    }
    await AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]), err => console.log(err))
    setTodos(
      prev => [...prev, newTodo]
    )
  }
  const RemoveTodo = async key => {
    await AsyncStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.key !== key)), err => console.log(err))
    setTodos(
      todos.filter(todo => todo.key !== key)
    )
  }
  return (
    <Context.Provider value={{
      todos,
      AddTodo,
      RemoveTodo,
      filter,
      setFilter
    }}>
      <AppNavigator />
    </Context.Provider>
  )
}
