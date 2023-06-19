import { BookDetailModal } from "./BookDetailModal";
import { useState } from "react";

export const BookCard = (props) => {
  const { item, deleteBook } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col w-52 h-96 border border-1 p-3 bg-gray-50 shadow-md rounded-md">
      <div onClick={() => setOpenModal(true)} className="flex flex-col">
        <img
          src={
            item.image === ""
              ? "https://blog.atados.com.br/wp-content/uploads/2021/11/alfons-morales-YLSwjSy7stw-unsplash-scaled.jpg"
              : item.image
          }
          className="h-56 drop-shadow-lg"
        ></img>
        <div className=" h-20">
          <p className="mt-2 font-semibold">{item.title}</p>
          <p className=" italic">{item.author}</p>
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
