import './App.css';
import Labtop from './Components/Labtop/Labtop';
import Mobile from './Components/Mobile/Mobile';
import Shoes from './Components/Shoes/Shoes';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
		<Mobile></Mobile>
		<Labtop></Labtop>
		<Watch></Watch>
		<Shoes></Shoes>
    </div>
  );
}

export default App;
