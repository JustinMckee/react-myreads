import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import List from "./components/List";
import * as BooksAPI from "./utils/BooksAPI";
import NotFound from './components/NotFound';

function App() {

  const [books, updateBooks] = useState([]);

  const getBooks = async () => {
    const response = await BooksAPI.getAll();
    updateBooks(response);
  }

  const updateShelf = (book, newShelf) => {
    const changeShelf = async () => {
      await BooksAPI.update(book, newShelf);
      getBooks();
    }
    changeShelf();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/search" element={<Search books={books} updateShelf={updateShelf} />} />
      <Route exact path="/" element={<List books={books} updateShelf={updateShelf} />} />
    </Routes>
  );
}

export default App;
