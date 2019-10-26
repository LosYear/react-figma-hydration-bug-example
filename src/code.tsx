import * as React from 'react';
import { render } from 'react-figma';
import { App } from './App';



(async () => {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
    render(<App />, figma.root);
})();
