import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexModule from "./components/PAGES/IndexModule/IndexModule";
import NavBar from "./components/LAYOUT/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<IndexModule/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
