import { FC, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces/entry';


import { EntriesContext, entriesReducer } from './';
import axios from 'axios';
import entriesApi from '../../apis/entriesApi';
import { IEntry } from '../../models';

export interface EntriesState {
    entries: Entry[];
}
interface Props {
    children: React.ReactNode;
}




const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}


export const EntriesProvider:React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addNewEntry = async( description: string ) => {
        const response = await entriesApi.post<Entry>(`/entries`, {description});
        console.log(response);

        dispatch({ type: '[Entry] Add-Entry'});
    }

    const updateEntry = async( {_id, description, status}: Entry ) => {
        try {
            const {data} = await entriesApi.put<Entry>(`/entries/${_id}`, {status, description});
            dispatch({ type: '[Entry] Entry-Update', payload: data });
        } catch (error) {
            return null;
        }
    }

    const getEntries = async() => {
        try {
            const { data } = await entriesApi.get(`/entries`);
            dispatch({ type: '[Entry] Entries-Data', payload: data });
            
        } catch (error) {
            return null;
        }
    }

    useEffect(() => {
        getEntries();
    }, []);

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
            getEntries,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};