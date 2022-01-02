import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import GuyedScreen from "./src/screens/GuyedScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import MonopoleScreen from "./src/screens/MonopoleScreen";
import MonopoleScreenPostCX from "./src/screens/MonopoleScreenPostCX";
import BoxScreen from "./src/screens/BoxScreen";

import SettingsScreen from "./src/screens/SettingsScreen";
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    GuyedChecklist: GuyedScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    MonopoleChecklist: MonopoleScreen,
    MonopolePost: MonopoleScreenPostCX,
    BoxScreen: BoxScreen,
    Settings: SettingsScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Dish Drone '
      //headerMode: 'none',
      //headerVisible: false,
      //headerShown: false
      
    }
  },
    {
    navigationOptions: {
      //headerMode: 'none',
      //headerVisible: false,
      //headerShown: false
    }
  });

  const App = createAppContainer(navigator);

  export default () => {
    return <Provider>
      <App />
    </Provider>
  };