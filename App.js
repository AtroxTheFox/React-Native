import { StyleSheet, Button, View, ScrollView } from 'react-native';
import LongText from './components/long_text';
import MyStack from './components/pages/router';

export default function App({navigation}) {
  return (
 <MyStack/>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  scrollView: {
    marginHorizontal: 20,
  },
});