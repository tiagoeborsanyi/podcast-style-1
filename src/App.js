import './App.css';
import Menu from './pages/menu/menu';
import Content from './pages/content/content';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Menu />
      </div>
      <div className='center'>
        <Content />
      </div>
      <div className='right'>right</div>
    </div>
  );
}

export default App;
