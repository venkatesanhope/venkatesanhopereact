
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Tasktwo from './component/Tasktwo'
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Dashboard></Dashboard>
        <Tasktwo></Tasktwo>
        <Footer></Footer>
    </div>
  );
}

export default App;
