import { createContext } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProivder = ({ children }) => {
  const contextValue = {};

  return (
    <StoreContext.Provider contextValue={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProivder;

StoreContextProivder.propTypes = {
  children: PropTypes.element,
};
