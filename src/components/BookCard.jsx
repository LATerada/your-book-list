import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const BookCard = (props) => {
  const { item } = props;

  return (
    <div className="flex border border-1 border-black p-2">
      <img src={item.image} className="w-12 h-18"></img>
      <div>
        <p>{item.title}</p>
        <p>{item.author}</p>
      </div>

      <button>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};
