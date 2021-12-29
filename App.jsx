import { Provider } from 'react-redux';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>WOYYY ini gwFFFFFFFFFFFFFFFf</Text>
        <Button
          title="Test"
          onPress={() => {
            Alert.alert('Woy', 'antum ngapain', [{ text: 'Back', style: 'destructive' }]);
          }}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
