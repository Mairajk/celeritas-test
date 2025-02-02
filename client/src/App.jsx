import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

import PageRoutes from './Routes'

const App = () => {
  return (
    <ErrorBoundary>
      <PageRoutes />
    </ErrorBoundary >
  );
};

export default App;
