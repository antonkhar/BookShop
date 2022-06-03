export interface IApi {
    id: number,
    description: string,
    author_id: number,
    title: string,
    price: number,
    genres: [{
       id: number,
       name: string 
    }],
    previews: null | string[],
    image: null | string,
    writingDate: Date,
    releaseDate: Date
}