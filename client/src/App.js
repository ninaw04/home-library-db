import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./pages/Books"
import AddBook from "./pages/AddBook"
import UpdateBook from "./pages/UpdateBook"
import Reading from "./pages/Reading"
import ShowReader from "./pages/ShowReader"
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/updateBook/:id" element={<UpdateBook/>}/>
          <Route path="/reading" element={<Reading/>}/>
          <Route path="/reading/:id" element={<ShowReader/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
