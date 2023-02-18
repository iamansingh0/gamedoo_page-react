import './App.css';
import Sidebar from './components/Sidebar';
import Rightpage from './components/Rightpage';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Sidebar />
      </div>
      <div className='right'>
        <Rightpage />
      </div>
    </div>
  );
}

export default App;
