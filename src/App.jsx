import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Parameters from './pages/Parameters';
import Parameters2 from "./pages/Parameters2";




function App() {
  return (
    <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1561985.jpg")`}}>
    <Routes>
      <Route path="/" element={<Parameters />} /> 
    </Routes>
    </div>

      
  );
}

export default App;
