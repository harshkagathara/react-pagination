
export const genres = [
    { _id: "789456123", name: "Action"},
    { _id: "789456127", name: "History" },
    { _id: "7894561273", name: "Drama" },
];

export function getGenres(){
    return genres.filter(g=>g);
}
