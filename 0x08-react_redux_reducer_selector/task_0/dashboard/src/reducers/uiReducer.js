import * as actions from '../actions/uiActionTypes';
// To Create the basic state
// In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:
// It should have one boolean property isNotificationDrawerVisible
// It should have one boolean property isUserLoggedIn
// It should have one empty object user
// Create the reducer function
// In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:
// DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
// HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
// LOGIN_SUCCESS should set isUserLoggedIn to true
// LOGIN_FAILURE should set isUserLoggedIn to false
// LOGOUT should set isUserLoggedIn to false

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };
  
  export function uiReducer(state=initialState, action={type: null}) {
    switch(action.type) {
      case actions.DISPLAY_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: true
        };
  
      case actions.HIDE_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: false
        };
  
      case actions.LOGIN_SUCCESS:
        return {
          ...state,
          isUserLoggedIn: true
        };
  
      case actions.LOGIN_FAILURE:
        return {
          ...state,
          isUserLoggedIn: false
        };
      
      case actions.LOGOUT:
        return {
          ...state,
          isUserLoggedIn: false
        };
      
      default:
        return state;
    }
  }