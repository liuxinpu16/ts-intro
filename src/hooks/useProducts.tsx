import { useContext } from "react";
import ProductsContext, {
  UseProductContextType,
} from "../context/ProductsProvider";

const useProduct = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useProduct;
