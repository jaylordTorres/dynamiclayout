import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { DynamicLayoutProvider } from './DynamicLayout';
import { Sample } from './Sample';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DynamicLayoutProvider isFullWidth={true}>
        <Sample />
      </DynamicLayoutProvider>
    </React.Fragment>
  );
}

export default App;
