import { useCallback } from "react";
import { countryCodes } from "../data/countryCodes";
import styles from './CountrySelector.module.css';


export const CountrySelector = ({onChange}) => {

    const handleCountryChange = useCallback((event) => {
        const value = event.target.value;
        const countryData = countryCodes.find(x => x.code === value);
        onChange(countryData);
    }, [onChange]);

    return <select data-testid="selector" defaultValue={'default'} className={styles.selector} onChange={handleCountryChange}>
        <option value={'default'} disabled>-- Please select a country --</option>
        {countryCodes.map(country => {
            return <option key={country.code} value={country.code}>{country.name}</option>
            })}
    </select>
};