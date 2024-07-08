import { StoreContext } from "../contexts/StoreContext";

const useContexts = () => {
  const contextValues = useContexts(StoreContext);
  return contextValues;
};

export default useContexts;
