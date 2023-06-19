import { useEffect } from "react";
import { useState } from "react";
import { booksList } from "../constants/booksList";
import { BookCard } from "../components/BookCard";

export const BookList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(booksList);
    console.log(list);
  }, [list]);

  return (
    <>
      {list.map((item, index) => {
        return <BookCard key={index} item={item}></BookCard>;
      })}
    </>
  );
};
