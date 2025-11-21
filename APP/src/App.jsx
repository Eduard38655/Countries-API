import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryInfo from "../src/CountryInfo.jsx";
import HomePage from "../src/HomePage.jsx";
function App() {
  return (
    <>
      <BrowserRouter basename="/Countries-API">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
