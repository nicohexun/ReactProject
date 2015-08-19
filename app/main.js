import React from 'react';
import Hello from './modules/MyComponent';
import antd from 'antd';

const Datepicker = antd.Datepicker;

main();

function main() {
    React.render(<Datepicker />, document.getElementById('app'));
}