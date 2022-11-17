import {NumberChecker} from "../src/NumberChecker";
import {render, screen} from '@testing-library/react'
import UserEvent from "@testing-library/user-event";

describe('NumberChecker tests', () => {
    it('Button is not clicked', () => {
        render(<NumberChecker array={[]} number={0}/>);
        const counter = screen.getByTestId('counter').textContent;
        const result = screen.getByTestId('result').textContent;

        expect(counter).toBe('0');
        expect(result).toBe('No result yet');
    });

    it('Array contains number', async () => {
        const user = UserEvent.setup()
        render(<NumberChecker array={[1, 2, 3, 4, 5]} number={5}/>);
        await user.click(screen.getByTestId('clickme-button'));
        const counter = screen.getByTestId('counter').textContent;
        const result = screen.getByTestId('result').textContent;

        expect(counter).toBe('1');
        expect(result).toBe('Array contains number');
    });

    it('Array doesn\'t contain number', async () => {
        const user = UserEvent.setup()
        render(<NumberChecker array={[1, 2, 3, 4, 5]} number={6}/>);
        await user.click(screen.getByTestId('clickme-button'));
        const counter = screen.getByTestId('counter').textContent;
        const result = screen.getByTestId('result').textContent;

        expect(counter).toBe('1');
        expect(result).toBe('Array doesn\'t contain number');
    });
})
