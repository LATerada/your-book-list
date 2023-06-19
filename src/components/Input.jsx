export const Input = (props) => {
  const { placeholder, name, type, value, onChange, isValid } = props;
  console.log(isValid);
  if (!isValid) {
    return (
      <input
        className="w-60 h-10 py-4 pl-4 mb-1 border-red-400 border-2"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    );
  }
  return (
    <input
      className="w-60 h-10 py-1 pl-4 mb-2 border"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange} 
    ></input>
  );
};
