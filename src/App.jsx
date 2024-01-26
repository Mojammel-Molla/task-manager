import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import TaskBody from './components/task-body/TaskBody';

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <NavBar></NavBar>
      <Banner></Banner>
      <TaskBody></TaskBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
