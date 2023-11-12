import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryListAdd from "./components/CountryListAdd";
import CountryListSearch from "./components/CountryListSearch";
import CountryListDelete from "./components/CountryListDelete";
import CountryListView from "./components/CountryListView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CountryListAdd />} />
          <Route path="search" element={<CountryListSearch />} />
          <Route path="delete" element={<CountryListDelete />} />
          <Route path="view" element={<CountryListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
