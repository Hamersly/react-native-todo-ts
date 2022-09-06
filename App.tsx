import {Provider} from 'react-redux';
import {store} from "./store/store"
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {Title} from "./components/Title/Title";
import {List} from "./components/List/List";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#696969',
        width: '100%',
        height: '80%',
      }}>
        <Title/>
        <List/>
        <StatusBar style="auto"/>
      </View>
    </Provider>
  );
}
