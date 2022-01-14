import './App.css';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
 
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
