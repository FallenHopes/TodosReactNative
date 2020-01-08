import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MyPicker } from '../components/newTodo/MyPicker';
import Context from '../Context'

export default function AddScreen() {
  const [item, setItem] = useState('Средний')
  const [name, setName] = useState('')
  const { AddTodo } = useContext(Context)
  return (
    <View style={styles.container}>
      <Text style={styles.headInput}>---Введите название задачи---</Text>
      <TextInput value={name} style={styles.inputName} placeholder='Название задачи' onChangeText={t => {
        if (t.length > 40)
        {
          setName(t.split('').splice(t.length - 2, 1).join())
          Alert.alert('Предупреждение', 'Максимальная длина задачи 40 символов')
        }
        setName(t)
      }}/>
      <Text style={styles.headPicker}>---Выберите приоритет---</Text>
      <MyPicker item={item} setItem={setItem}/>
      <TouchableOpacity style={styles.buttonAdd} onPress={async () => {
          if (name){
            AddTodo(name, item)
            Alert.alert('Успешно','Запись успешно добавлена')
            setName('')
          }
          else{
            Alert.alert('Предупреждение','Введите название задачи')
          }
      }}>
        <Text style={styles.buttonAddText}>Добавить задачу</Text>
      </TouchableOpacity>
    </View>
  );
}

AddScreen.navigationOptions = {
  title: 'Добавить новую задачу',
  headerTintColor: 'white',
  headerStyle:{
    backgroundColor: 'black',
    fontWeight: 'bold'
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  headPicker:{
    fontSize: 20,
    textAlign: 'center'
  },
  inputName:{
    padding: 20,
    fontSize: 30,
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 5
  },
  headInput:{
    fontSize: 20,
    textAlign: 'center'
  },
  buttonAdd:{
    width: '90%',
    padding: 20,
    marginHorizontal: '5%',
    marginTop: 30,
    backgroundColor: 'black',
    borderRadius: 5
  },
  buttonAddText:{
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  }
});
