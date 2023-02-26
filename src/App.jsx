import './App.css';
import UbahBahasa from './components/UbahBahasa';
import Count from './components/Count';
import UbahLatar from './components/UbahLatar';
import Todo from './components/Todo';
import SinkronDocTitle from './components/SinkronDocTitle';

const App = () => {
  return (
    <div className='app'>
      <UbahBahasa />
      <Count />
      <UbahLatar />
      <Todo />
      <SinkronDocTitle />
    </div>
  );
};
export default App;
