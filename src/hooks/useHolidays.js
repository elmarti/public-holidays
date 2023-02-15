import {useState, useEffect, useMemo} from 'react';


export const useHolidays = (country) => {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {

        async function loadData() {
            const url = `https://date.nager.at/api/v3/publicholidays/2023/${country.code}`;
            const response = await fetch(url);
            if(response.status === 204){
                setHolidays([]);
                return;
            }
            const data = await response.json();
            setHolidays(data);
        }
        if(country !== null){
            loadData();
        }
    
    }, [country]);

    return useMemo(() => {
        return {
            holidays
        };
    }, [holidays]);
};