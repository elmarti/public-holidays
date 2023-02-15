import { fireEvent, render, screen } from "@testing-library/react";
import { CountrySelector } from "./CountrySelector";

it('should correctly set default option', () => {
    render(<CountrySelector/>);
    const defaultOption = screen.getByRole('option', {name: '-- Please select a country --'});
    expect(defaultOption.selected).toBe(true);
});




it('should return country data when selecting an option', (done) => {
    const callback = (country) => {
        expect(country.code).toBe('PK');
        expect(country.name).toBe("Pakistan");
        done();
    };
    render(<CountrySelector onChange={callback}/>);
    const selector = screen.getByTestId('selector');
    fireEvent.change(selector, {target: { value: 'PK'}});
});