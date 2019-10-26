import * as React from 'react';
import { Page, Rectangle } from 'react-figma';

export const App = () => {
    return (
            <Page name="New page">
                <Rectangle name="first" style={{ width: 200, height: 100, backgroundColor: '#ff0000' }} />
                <Rectangle name="second" style={{ width: 200, height: 100, backgroundColor: '#00ff00' }} />
                <Rectangle name="third" style={{ width: 200, height: 100, backgroundColor: '#0000ff' }} />
            </Page>
    );
};
