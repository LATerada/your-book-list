import { useForm } from "../hooks/useForm";

export const BookForm = (props) => {
  const { list, setList } = props;

  const { form, onChangeInputs, clearInputs } = useForm({
    title: "",
    author: "",
    description: "",
    image: "",
  });

  const addBook = (bookInfo) => {
    setList([...list, bookInfo]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBook(form);
    clearInputs();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Título"
          name="title"
          type="text"
          value={form.title}
          onChange={onChangeInputs}
        />
        <input
          placeholder="Autor"
          name="author"
          type="text"
          value={form.author}
          onChange={onChangeInputs}
        />
        <input
          placeholder="Descrição"
          name="description"
          type="text"
          value={form.description}
          onChange={onChangeInputs}
        />
        <input
          placeholder="Link da Imagem (URL)"
          name="image"
          type="url"
          value={form.image}
          onChange={onChangeInputs}
        />
      </form>
      <button type="submit" onClick={onSubmit}>
        Adicionar
      </button>
    </div>
  );
};
