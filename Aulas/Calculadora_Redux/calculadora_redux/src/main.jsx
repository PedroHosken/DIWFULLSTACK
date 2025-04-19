import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import storeConfig from './store/store.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'


const store = createStore(storeConfig)

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>

)
