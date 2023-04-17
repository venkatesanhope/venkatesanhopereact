
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Tasktwo from './component/Tasktwo';
import Taskrcol from './component/Taskrcol';
import Studentinfo from './component/Studentinfo';
function App() {
  return (
    <div className="App">
        <Header></Header>
       
        <Studentinfo></Studentinfo>
        <Footer></Footer>
    </div>
  );
}

export default App;
// <Tasktwo></Tasktwo>
//<Taskrcol></Taskrcol>
// <Dashboard></Dashboard>