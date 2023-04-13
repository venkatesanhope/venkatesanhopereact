
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Tasktwo from './component/Tasktwo';
import Taskrcol from './component/Taskrcol';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Dashboard></Dashboard>
        <Tasktwo></Tasktwo>
        <Taskrcol></Taskrcol>
        <Footer></Footer>
    </div>
  );
}

export default App;
