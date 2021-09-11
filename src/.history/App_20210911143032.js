import Input from './components/Input';
import Todolist from './components/Todolist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persisit/lib/integration/react';
import store from './store';

function App(){

  return (
    //使用Provider包裹所有组件，使所有组件都能获取store中的state
    <Provider store = {store}>
      <PersistGate>
      <div className="App">
        <Input />
        <Todolist />
      </div>
      </PersistGate>
    </Provider>
  )
}

export default App;