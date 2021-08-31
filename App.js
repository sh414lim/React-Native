import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//저장 후에 즉시 전체 애플리케이션을 reload한다.
//splash 스크린이 잠깐 보이고 애플리케이셔이 나타난다.
//이것을 live load라고 한다 (내가 저장하면 자동으로 리프레쉬)
//새로고침을 수동으로 하고 싶다면 command or ctrl + R