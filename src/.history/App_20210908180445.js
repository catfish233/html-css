import Input from './components/Input';
import Todolist from './components/Todolist';
import { Provider } from 'react-redux';
import store from './store';

function App(){

  return (
    <Provider store = {store}>
      <div className="App">
        <Input />
        <Todolist />
      </div>
    </Provider>
  )
}

export default App;