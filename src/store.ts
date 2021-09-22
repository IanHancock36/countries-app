import { Instance,types } from "mobx-state-tree";
import {createContext, useContext} from 'react'

interface Country {
    name: string; 
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    region: string;
    population: number;
    area: number;
    gini: number;
    borders: string[];
    
    currencies: Array<{
        code: string;
        name: string;
        symbold: string;
    }>
}

// create two MST stores Countries and Root Store. 

const CountryStore = types.model({
    countries : types.array(types.frozen<Country>())
});
// using types.frozen means hold the API response
// frozen is ment to hold a value that is is serializable (The process whereby an object or data structure is translated into a format suitable for transferral over a network, or storage (e.g. in an array buffer or file format). In JavaScript, for example, you can serialize an object to a JSON string by calling the function JSON. stringify())  
// and Immutable -(Immutables are the objects whose state cannot be changed once the object is created.)

export const RootStore = types.model({
    countryStore : CountryStore
})
let _store: any = null;

export function initializeStore(){
    _store = RootStore.create({
        countryStore : {countries: []},
    });
    return _store;
}