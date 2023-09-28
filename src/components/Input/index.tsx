import "./index.css";
import search from "../../assets/icons/search.svg";

interface CustomInputProps {
  urlInputRef?: React.RefObject<HTMLInputElement>;
  onSearch: () => void;
}

export function CustomInput({ urlInputRef,onSearch }: CustomInputProps) {



  return (
    <>
      <div className="custom-input">
        <input ref={urlInputRef} className="text-input" type="text" placeholder="Cole a url aqui"/>
        <button className="search-button" onClick={onSearch}>
          <img src={search} alt="search" />
        </button>
      </div>
    </>
  );
}
