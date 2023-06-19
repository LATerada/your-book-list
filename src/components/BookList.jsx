import { BookCard } from "../components/BookCard";

export const BookList = (props) => {
  const { list, setList } = props;

  const deleteBook = (item) => {
    const newList = list.filter((bookInfo) => bookInfo !== item);
    setList(newList);
  };
  
  return (
    <div className="flex flex-wrap items-center justify-center p-6 gap-4">
      {list.map((item, index) => {
        return (
          <BookCard key={index} item={item} deleteBook={deleteBook}></BookCard>
        );
      })}
    </div>
  );
};
