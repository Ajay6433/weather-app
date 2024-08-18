import './App.css';
import Home from './containers/Home';
import Sidebar from './containers/Sidebar';

function App() {
  return (
    <div className='flex items-center justify-center p-2 mv-app'>
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
