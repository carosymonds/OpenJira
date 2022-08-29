import { EntryStatus } from "./entrystatus";

export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}