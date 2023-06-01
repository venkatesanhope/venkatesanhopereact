
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Tasktwo from './component/Tasktwo';
import Taskrcol from './component/Taskrcol';
import Studentinfo from './component/Studentinfo';
import Task1 from './component/Task1/Task1';
import Task2 from './component/Task2/Task2';
function App() {
  return (
    <div className="App">
        <Header></Header>
       <Task2></Task2>
        
        <Footer></Footer>
    </div>
  );
}

export default App;
// <Tasktwo></Tasktwo><Task1></Task1>
//<Taskrcol></Taskrcol>
// <Dashboard></Dashboard><Studentinfo></Studentinfo>