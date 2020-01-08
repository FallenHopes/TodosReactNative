import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Context from '../../Context'

var colorPriority

export const ItemTodo = ({ title, priority, deleteTodo }) => {
    switch (priority){
        case "Высокий" : colorPriority = 'green'; break;
        case "Средний" : colorPriority = '#a6a319'; break;
        case "Низкий" : colorPriority = 'red'; break;
        default: colorPriority = 'black'; break;
    }
    return(
        <View style={styles.item}>
            <View style = {{width: '80%'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{color: colorPriority}}>Приоритет: {priority}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.delete} onPress={async () => {
                    deleteTodo()
                    Alert.alert('Внимание', 'Запись удалена')
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 25,
        marginBottom: 5
    },
    delete:{
        backgroundColor: '#0c0b24',
        padding: 10
    }
})