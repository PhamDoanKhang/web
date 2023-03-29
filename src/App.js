import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import HandelRouter from './routers';
import SearchProduct from './componients/SearchProduct/SearchProduct';
function App() {
  return (
    <Router>
      <div className="App">
          <HandelRouter />
          {/* <SearchProduct /> */}
      </div>
    </Router>
  );
}

export default App;
