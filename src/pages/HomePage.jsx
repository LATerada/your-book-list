import { BookForm } from "../components/BookForm";
import { BookList } from "../components/BookList";
import { useState } from "react";
import { useEffect } from "react";
import { booksList } from "../constants/booksList";

const HomePage = () => {
  const [list, setList] = useState(booksList);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
      <BookForm list={list} setList={setList} />
      <BookList list={list} setList={setList} />
    </>
  );
};
export default HomePage;
