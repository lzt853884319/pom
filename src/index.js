import _ from 'lodash';
import * as React from 'react';
import ReactDom from 'react-dom';
import NumberInput from './component/NumberInput'

function component() {

    // Lodash, currently included via a script, is required for this line to work
    element.id = "main";

    return element;
}

class App extends React.Component {
    render() {
        return <div>react project: pom<NumberInput /></div>
    }
};
const element = document.createElement('div');
element.id = 'app';
document.body.append(element);
ReactDom.render(<App />, element);
