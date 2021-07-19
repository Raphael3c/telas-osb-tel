import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'

const myStore = createStore(reducer)

function reducer(state: any = false, action: any){
  switch (action.type){
    case 'OPEN':
      return true
    case 'CLOSE':
      return false
    default:
      return state
  } 
}

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
