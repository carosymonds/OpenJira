import { Entry } from '../../interfaces/entry';
import { EntriesState } from './';


type EntriesActionType = 
   | { type: '[Entry] Add-Entry'} 
   | { type: '[Entry] Entry-Update' , payload: Entry} 
   | { type: '[Entry] Entries-Data' , payload: Entry[]} 
    

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {

      case '[Entry] Add-Entry':
         return {
            ...state,
            entries: [...state.entries]
         }
      case '[Entry] Entry-Update':
         return {
            ...state,
            entries: state.entries.map( entry => {
              if ( entry._id === action.payload._id ) {
                 entry.status = action.payload.status;
                 entry.description = action.payload.description;
              }
              return entry;
            })
         }
      case '[Entry] Entries-Data':
         return {
            ...state,
            entries: [...action.payload]
         }
       default:
          return state;
   }

}