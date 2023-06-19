import { BookDetailModal } from "./BookDetailModal";
import { useState } from "react";

export const BookCard = (props) => {
  const { item, deleteBook } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col w-48 border border-1 p-2 bg-gray-50 shadow-sm">
      <div onClick={() => setOpenModal(true)} className="flex flex-col">
        <img src={item.image} className="w-44 drop-shadow-lg"></img>
        <div>
          <p>{item.title}</p>
          <p>{item.author}</p>
        </div>
      </div>

      <button
        onClick={() => deleteBook(item)}
        className="mt-3 m-auto inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
      >
        Excluir
      </button>
      <BookDetailModal
        bookInfo={item}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></BookDetailModal>
    </div>
  );
};
