import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./pages/Books"
import AddBook from "./pages/AddBook"
import UpdateBook from "./pages/UpdateBook"
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/updateBook" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
