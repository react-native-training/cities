import { TabNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import { Tabs, TabConfig } from '@config/tabs';
import { PUSH, JUMP } from '@constants';

const AppNavigator = TabNavigator(Tabs, TabConfig);

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  switch(action.type) {
    case PUSH:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params || {},
        }),
        state
      );
    default:
      return nextState || state;
  }
};

export default navReducer;
