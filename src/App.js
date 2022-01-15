import './App.css';
import Converter from './Components/Converter';

const COIN = {
  from: 'BRL',
  to: 'USD'
}

function App() {
  return (
    <div className='app'>
      <Converter coinFrom={COIN.from} coinTo={COIN.to}/>
    </div>
  );
}

export default App;