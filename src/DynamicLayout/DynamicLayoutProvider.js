import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const DynamicLayoutContext = createContext();

const useDynamicLayoutProvider = () => {
  const value = useContext(DynamicLayoutContext);
  if (!value) {
    throw new Error('DynamicLayoutContext must added to ancestor');
  }
  console.log('provider', value)
  return value;
};

const DynamicLayoutProvider = ({ isFullWidth = false, children }) => {

  // isFullWidth === true , side must be hidden
  const [isFull, setValue] = useState(isFullWidth);

  const onToggle = useCallback(() => setValue(v => !v), [setValue]);
  const onToFull = useCallback(() => setValue(() => true), [setValue]);
  const onToColumn = useCallback(() => setValue(() => false), [setValue]);

  const value = useMemo(() => ({ onToggle, onToFull, onToColumn, isFull }),
    [onToggle, onToFull, onToColumn, isFull]);
  return (<DynamicLayoutContext.Provider value={value}>{children}</DynamicLayoutContext.Provider >);
};

DynamicLayoutProvider.propTypes = {
  isFullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DynamicLayoutProvider;
export { useDynamicLayoutProvider, DynamicLayoutProvider };