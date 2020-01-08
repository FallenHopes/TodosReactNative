import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet 
} from 'react-native'

export default function SettingsScreen() {
  return(
    <View style={styles.container}>
      <Text>Development by Vladislav Serebrov</Text>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'О приложении',
  headerTintColor: 'white',
  headerStyle:{
    backgroundColor: 'black',
    fontWeight: 'bold'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})