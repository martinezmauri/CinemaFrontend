import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./views/Home/Home";
import { Movies } from "./views/Movies/Movies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/films" element={<Movies />} />
    </Routes>
  );
}

export default App;
