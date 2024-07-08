import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProivder = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const contextValue = { loading, setLoading };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProivder;

StoreContextProivder.propTypes = {
  children: PropTypes.element,
};
