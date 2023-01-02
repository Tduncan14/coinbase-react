import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DailyPrices from './components/DailyPrices';
import AboutUs from './components/About';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DailyPrices/>
      <AboutUs />
    </div>
  );
}

export default App;
