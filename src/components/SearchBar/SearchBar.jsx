import s from "./style.module.css";
import { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  return (
    <>
      <SearchIcon size={22} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a TV show you may like..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={s.input}
      />
    </>
  );
};

export default SearchBar;
