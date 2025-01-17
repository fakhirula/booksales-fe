import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";
import { getGenres } from "../../../services/genres";

export default function Books() {
  // useState
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      // kode akan ditunggu sampai selesai semua, lalu memperbarui state
      const [booksData, genresData] = await Promise.all([getBooks(), getGenres()])

      setBooks(booksData);
      setGenres(genresData);
    };

    fetchData();
  }, []);


  // fungsi untuk mendapatkan nama genre berdasarkan genre_id
  const bookGenre = books?.map((book) => {
    return {
      ...book,
      genre: genres.find((genre) => genre.id === book.genre_id),
    }
  })

  return <ProductList datas={bookGenre} />;
}
