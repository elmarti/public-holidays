import { useState } from "react";
import { CountrySelector } from "../components/CountrySelector";
import { Flag } from "../components/Flag";
import { Panel } from "../components/Panel";
import { useHolidays } from "../hooks/useHolidays";

export const ListView = () => {

    const [country, setCountry] = useState(null);
   
    const {holidays} = useHolidays(country);

    return <div>
        <CountrySelector onChange={(value) => setCountry(value)}/>
        {country === null ? 
        <Panel>Please select a country</Panel> :
        <>
            <div>
                <h2>{country.name}</h2>
                <Flag countryCode={country.code} >

                </Flag>
            </div>
            {holidays.length > 0 ? holidays.map(holiday => (
                <Panel>
                    <p>Name: {holiday.name}</p>
                    <p>Local Name: {holiday.localName}</p>
                    <p>Date: {holiday.date}</p>
                    </Panel>
            )): <Panel>No data found for {country.name}</Panel>}
        </>
       }
    </div>;
};