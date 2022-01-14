import './App.css';
import Conversor from './Components/Conversor';

const COIN = {
  from: 'BRL',
  to: 'USD'
}

function App() {
  return (
    <div className='app'>
      <Conversor coinFrom={COIN.from} coinTo={COIN.to}/>
    </div>
  );
}

export default App;
