import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";
import NoPage from "./components/NoPage";
import Home from "./components/Home";

function App() {
  return (
    <>
      <h1>navigation bar</h1>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
