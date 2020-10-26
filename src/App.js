import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './screens/IndexScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: 'Tasks',
            headerRight: () => (
              <TouchableOpacity>
                <Icon name="plus" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
