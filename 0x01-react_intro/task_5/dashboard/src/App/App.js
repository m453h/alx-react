import './App.css';
import logo from '../assets/Holberton-logo.jpg';
import {getFullYear, getFooterCopy} from "../utils/utils";

function App() {
  return (
      <div className='App'>
        <div className='App-header'>
            <img src={ logo } alt='Holberton Logo' />
          <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email'></input>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password'></input>
            <button>OK</button>
        </div>
        <div className='App-footer'>
          <p>Copyright {getFullYear()} - { getFooterCopy(true)}</p>
        </div>
      </div>
  );
}

export default App;
