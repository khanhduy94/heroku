import React from 'react';
import ReactDOM from 'react-dom';
import RouterHandler from './RouterHandler';

function Example() {
    return (
        <RouterHandler/>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
