import { BookCard } from "../components/BookCard";

export const BookList = (props) => {
  const { list, setList } = props;

  const deleteBook = (item) => {
    const newList = list.filter((bookInfo) => bookInfo !== item);
    setList(newList);
  };
  
  return (
    <>
      {list.map((item, index) => {
        return (
          <BookCard key={index} item={item} deleteBook={deleteBook}></BookCard>
        );
      })}
    </>
  );
};
