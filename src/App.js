import './App.css';
import Converter from './Components/Converter';
import { FaGithub } from "react-icons/fa";

const COIN = {
  from: 'BRL',
  to: 'USD'
}

function App() {
  return (
    <div className='app'>
      <Converter coinFrom={COIN.from} coinTo={COIN.to} />
      <a href='https://github.com/jonathashnr/desafio-jhony' target='_blank'>
        <FaGithub className='githubIcon' />
      </a>
    </div>
  );
}

export default App;