import { useState } from "react";
import { useForm } from "../hooks/useForm";
import ValidationService from "../services/validationService";
import { Input } from "./Input";

export const BookForm = (props) => {
  const { list, setList } = props;

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAuthorValid, setIsAuthorValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [isUrlValid, setIsUrlValid] = useState(true);

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

    setIsTitleValid(ValidationService.titleValidation(form.title));
    setIsAuthorValid(ValidationService.authorValidation(form.author));
    setIsDescriptionValid(
      ValidationService.descriptionValidation(form.description)
    );

    if (
      ValidationService.titleValidation(form.title) &&
      ValidationService.authorValidation(form.author) &&
      ValidationService.descriptionValidation(form.description)
    ) {
      addBook(form);
      clearInputs();
    }
  };

  return (
    <div>
      <p>Adicione um livro à lista!</p>
      <p>(*)Obrigatório</p>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Título*"
          name="title"
          type="text"
          value={form.title}
          onChange={onChangeInputs}
          isValid={isTitleValid}
        />
        <Input
          placeholder="Autor*"
          name="author"
          type="text"
          value={form.author}
          onChange={onChangeInputs}
          isValid={isAuthorValid}
        />
        <Input
          placeholder="Descrição*"
          name="description"
          type="text"
          value={form.description}
          onChange={onChangeInputs}
          isValid={isDescriptionValid}
        />
        <Input
          placeholder="Link da Imagem (URL)"
          name="image"
          type="url"
          value={form.image}
          onChange={onChangeInputs}
          isValid={isUrlValid}
        />
      </form>
      <button type="submit" onClick={onSubmit}>
        Adicionar
      </button>
    </div>
  );
};
