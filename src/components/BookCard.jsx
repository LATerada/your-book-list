import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { BookDetailModal } from "./BookDetailModal";
import { useState } from "react";

export const BookCard = (props) => {
  const { item, deleteBook } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex border border-1 border-black p-2">
      <div onClick={() => setOpenModal(true)}>
        <img src={item.image} className="w-12 h-18"></img>
        <div>
          <p>{item.title}</p>
          <p>{item.author}</p>
        </div>
      </div>

      <button onClick={() => deleteBook(item)}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <BookDetailModal
        bookInfo={item}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></BookDetailModal>
    </div>
  );
};
