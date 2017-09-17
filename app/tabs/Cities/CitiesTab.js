import React from 'react';

import { Routes, RouteConfig } from '@config/routes';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

const CitiesNav = StackNavigator(Routes, RouteConfig);

export default CitiesNav;

// const Cities = (props) => (
//   <CitiesNav
//     navigation={
//       addNavigationHelpers({
//         dispatch: props.dispatch,
//         state: props.nav,
//       })
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(Cities);
