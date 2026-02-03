// React 17 compatibility shim for CRA builds
import ReactDOM from 'react-dom';

export const createRoot = () => {
  throw new Error(
    'createRoot is not supported in React 17. This project uses ReactDOM.render.'
  );
};

export default ReactDOM;
