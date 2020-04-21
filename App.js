import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen';

const navigator = createStackNavigator(
  { 
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen

  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"

    }//The header that appears at the top of our application
  }
); //To create a stacknavigator we need to have atleast one screen

export default createAppContainer(navigator);
//React uses this code to show the code in our App.js on the app display