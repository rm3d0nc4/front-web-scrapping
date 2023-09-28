import "./App.css";

export default App;
import { useRef, useState } from "react";
import { Product } from "./interfaces/product";
import { CustomInput } from "./components/Input";
import { Logo } from "./components/Logo";
import { CardResult } from "./components/CardResult";

export function App() {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onHandleSearch = async () => {
    setProduct(undefined);
    setIsLoading(true);
    const url: string | undefined = urlInputRef.current?.value;
    const request: Request = new Request(`https://netshoes-scrapping-api.onrender.com/get-product?url=${url!}`);
    const response: Response = await fetch(request);
    const data = await response.json();
    if (response.ok) {
      setProduct(data as Product);
    } else {
      const message = data.message;
      console.log(message)
    }
    setIsLoading(false);
  };

  return (
    <div className="page">
      <header>
        <Logo />
      </header>
      <main>
        <CustomInput onSearch={onHandleSearch} urlInputRef={urlInputRef} />
        <CardResult product={product} isLoading={isLoading} />
      </main>
      <footer>
        <a href="https://www.github.com/rm3d0nc4" target="_blank">
          @rm3d0nc4
          <p></p>
        </a>
      </footer>
    </div>
  );
}
