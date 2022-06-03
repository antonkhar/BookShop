import { IApi } from "./api.interface";

export interface IBookResponse {
    books : IApi[];
    meta: {
        limit: number;
        page: number;
        pages: number
        records: number;
    };
}