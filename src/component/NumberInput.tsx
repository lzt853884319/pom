import * as React from 'react';

export default class NumberInput extends React.Component<{}, {}> {
    render() {
        return <div>
            <span>数量</span>
            <input type="text" />
        </div>;
    }
}