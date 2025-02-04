import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </>
  );
}

export default App;
