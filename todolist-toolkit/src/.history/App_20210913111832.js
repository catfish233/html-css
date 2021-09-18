import Input from './components/Input';
import Todolist from './components/Todolist';
import { Provider } from 'react-redux';
import store from './store';
import { render } from '@testing-library/react';

function App(){
   render(
    //使用Provider包裹所有组件，使所有组件都能获取store中的state
    <Provider store = {store}>
      <div className="App">
        <Input />
        <Todolist />
      </div>
    </Provider>
  )
}

export default App;