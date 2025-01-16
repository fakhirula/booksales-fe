import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";

export default function Books() {
  // useState
  const [books, setBooks] = useState([]);

  // useEffect
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return <ProductList datas={books} />;
}
