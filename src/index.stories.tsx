import * as React from 'react'
import App from './'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './Redux/rootReducer'


const store = createStore(rootReducer)

const Regular: React.FC = () => (
  <Provider store={store}>
  <App />
</Provider>
)

export { Regular }

export default {
  title: 'Common/TestApp',
}