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
    <div className="flex flex-col items-center justify-center w-2/4 mt-6 mx-10 border border-1 p-3 bg-gray-50 shadow-md rounded-md">
      <p className="font-bold m-2">Adicione um livro à lista!</p>
      <form onSubmit={onSubmit} className="flex flex-wrap items-center justify-center gap-2">
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
      <p className="text-xs">(*)Obrigatório</p>
      <button
        type="submit"
        onClick={onSubmit}
        className="bg-gradient-to-r from-rose-400 to-orange-400 mt-3 m-auto inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
      >
        Adicionar
      </button>
    </div>
  );
};
