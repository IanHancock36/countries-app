import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from './store'

function CountriesList() {
    const {countryStore} =useStore();

    useEffect(()=> {
        countryStore.refreshCountries()
    },[]);
    return(
        <div>
            <h3>Countries List</h3>
            {countryStore.countries.map((value)=> {
                const countryName =value.name;
                return <span key ={countryName}>{countryName} </span>
            })}
        </div>
    )
}
export default CountriesList