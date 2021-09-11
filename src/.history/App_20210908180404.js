import Input from './components/Input';
import Todolist from './components/Todolist';
import { Provider } from 'react-redux';

function App(){

  return (
    <Provider>
      <div className="App">
        <Input />
        <Todolist />
      </div>
    </Provider>
  )
}

export default App;