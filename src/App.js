import './App.css';
import Menu from './pages/menu/menu';
import Content from './pages/content/content';
import Guotes from './pages/guotes/guotes';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Menu />
      </div>
      <div className='center'>
        <Content />
      </div>
      <div className='right'>
        <Guotes />
      </div>
    </div>
  );
}

export default App;
