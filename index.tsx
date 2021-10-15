import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@rb/components/src/button';

const App = () => (
  <div>
    <Button primary lg toggle>App</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
