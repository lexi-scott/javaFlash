import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cards from './flashcard';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Flashcards" component={Cards} />
    </Tab.Navigator>
  );
}

export default MyTabs