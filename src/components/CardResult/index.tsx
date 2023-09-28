import { Product } from "../../interfaces/product";
import "./index.css";

interface CardResultProps {
  product?: Product;
  isLoading: boolean;
}

export function CardResult({ product, isLoading }: CardResultProps) {
  return (
    <>
      <div className="card">
        {product === undefined ?  isLoading ? (<progress/>) :(
          
          <p>Insira a url clique em "Pesquisar"</p>
        ) : (
          <div className="card-body">
            <img className="card-image" src={product.imageUrl} alt={product.title} />
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-text">{product.description}</p>
              <div className="price-box">
                <span className="price">R$ {product.price.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
