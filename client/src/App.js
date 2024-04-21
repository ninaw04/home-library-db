import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./pages/Books"
import AddBook from "./pages/AddBook"
import UpdateBook from "./pages/UpdateBook"
import "./style.css"

function App() {
  return (
    <div>
      
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/updateBook/:id" element={<UpdateBook />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
