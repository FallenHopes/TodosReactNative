import React, {useContext} from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Context from '../Context'

var highColor, highColorText, mediumColor, mediumColorText, lowColor, lowColorText
const SwitchColor = filt => {
  switch(filt){
    case 'Высокий': 
      highColor = 'black';
      highColorText = 'white';
      mediumColor = 'white';
      mediumColorText = 'black';
      lowColor = 'white';
      lowColorText = 'black';
      break;
    case 'Средний':
      highColor = 'white';
      highColorText = 'black';
      mediumColor = 'black';
      mediumColorText = 'white';
      lowColor = 'white';
      lowColorText = 'black';
      break;
    case 'Низкий': 
      highColor = 'white';
      highColorText = 'black';
      mediumColor = 'white';
      mediumColorText = 'black';
      lowColor = 'black';
      lowColorText = 'white';
      break;
  }
}

export const SwitcherMain = () => {
    const {filter, setFilter} = useContext(Context)
    SwitchColor(filter)
    const styles = StyleSheet.create({
      switcher:{
          width: '70%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: '15%',
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 5
        },
        highSwitch:{
          paddingVertical: 10,
          backgroundColor: highColor
          
        },
        mediumSwitch:{
          paddingVertical: 10,
          backgroundColor: mediumColor
          
        },
        lowSwitch:{
          paddingVertical: 10,
          backgroundColor: lowColor
          
        },
        highSwitchText:{
          fontSize: 15,
          textAlign: 'center',
          color: highColorText
        },
        mediumSwitchText:{
          fontSize: 15,
          textAlign: 'center',
          color: mediumColorText
        },
        lowSwitchText:{
          fontSize: 15,
          textAlign: 'center',
          color: lowColorText
        }
    })
    return (
        <View style={styles.switcher}>
            <View style={{width: '33.33%'}}>
            <TouchableOpacity style={styles.highSwitch} onPress={() => setFilter('Высокий')}>
                <Text style={styles.highSwitchText}>Высокий</Text>
            </TouchableOpacity>
            </View>
            <View style={{width: '33.33%'}}>
            <TouchableOpacity style={styles.mediumSwitch} onPress={() => setFilter('Средний')}>
                <Text style={styles.mediumSwitchText}>Средний</Text>
            </TouchableOpacity>
            </View>
            <View style={{width: '33.33%'}}>
            <TouchableOpacity style={styles.lowSwitch} onPress={() => setFilter('Низкий')}>
                <Text style={styles.lowSwitchText}>Низкий</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
}
