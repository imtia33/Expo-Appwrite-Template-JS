import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tabs');
    }, 2000);
  }, []);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  )
}

export default Index