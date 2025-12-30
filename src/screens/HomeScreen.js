import React from 'react';
import { View, Button, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>B9IS126 Mobile App</Text>

      <Button
        title="Open Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="View Location"
        onPress={() => navigation.navigate('Location')}
      />
    </View>
  );
}
