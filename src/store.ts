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