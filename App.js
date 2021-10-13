import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import GuyedScreen from "./src/screens/GuyedScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HotSpotScreen from "./src/screens/HotSpotScreen";
import SquareScreen from "./src/screens/SquareScreen";
import MonopoleScreen from "./src/screens/MonopoleScreen";
import OnBoarding from "./src/screens/OnBoarding";
import BoxScreen from "./src/screens/BoxScreen";
import AppHome from "./src/screens/AppHome";
import CheckAirspaceScreen from "./src/screens/CheckAirspaceScreen";
import NewMission from "./src/screens/NewMission";
import EndMission from "./src/screens/EndMission";
import FlightLogScreen from "./src/screens/FlightLogScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ForecastScreen from "./src/screens/ForecastScreen";
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
    HotSpotChecklist: HotSpotScreen,
    Square: SquareScreen,
    MonopoleChecklist: MonopoleScreen,
    OnBoarding: OnBoarding,
    BoxScreen: BoxScreen,
    AppHome: AppHome,
    CheckAirspace: CheckAirspaceScreen,
    NewMission: NewMission,
    EndMission: EndMission,
    FlightLog: FlightLogScreen,
    Settings: SettingsScreen,
    Forecast: ForecastScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Drone Log',
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