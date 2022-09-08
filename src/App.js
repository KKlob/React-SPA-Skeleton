import './App.css';
import NavBar from './Components/NavBar';
import MainDisplay from './Components/Main';
import Form from './Components/Forms/Form';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainDisplay />} />
        <Route exact path="/form" element={<Form />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
