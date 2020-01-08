import React from 'react'
import { Picker, StyleSheet } from 'react-native'

export const MyPicker = ({item, setItem}) => {
    return (
        <Picker
        selectedValue={item}
        onValueChange={(itemVal, itemIdx) => {
            setItem(itemVal)
        }}
        style={styles.picker}
        >
            <Picker.Item label='Высокий' value='Высокий'/>
            <Picker.Item label='Средний' value='Средний'/>
            <Picker.Item label='Низкий' value='Низкий'/>
        </Picker>
    )
}

const styles = StyleSheet.create({
    picker:{
        width: '80%',
        marginHorizontal: '10%',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5
    }
})