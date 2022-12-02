import * as React from 'react';

interface Props {
    array: number[];
    number: number
}

const NumberChecker: React.FC<Props> = ({array, number}) => {
    const [count, setCount] = React.useState(0);
    const [result, setResult] = React.useState('No result yet');

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        setCount(count + 1);
        if (array.includes(number)) {
            setResult('Array contains number');
        } else {
            setResult('Array doesn\'t contain number');
        }
    }

    return (
        <div>
            <button data-testid="clickme-button" onClick={e => handleClick(e)}>Click me</button>
            <span data-testid="counter">{count}</span>
            <br/>
            <span data-testid="result">{result}</span>
        </div>
    );
};

export {NumberChecker};
