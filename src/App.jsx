import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
