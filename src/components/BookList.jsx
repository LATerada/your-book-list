import { BookCard } from "../components/BookCard";

export const BookList = (props) => {
  const { list, setList } = props;

  return (
    <>
      {list.map((item, index) => {
        return <BookCard key={index} item={item}></BookCard>;
      })}
    </>
  );
};
