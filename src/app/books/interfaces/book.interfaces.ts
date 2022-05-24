import { Data } from "@angular/router";

export interface IBook {
    id: number,
    name: string,
    description: string,
    author: string,
    yearIssue: Date,
    img: string
}