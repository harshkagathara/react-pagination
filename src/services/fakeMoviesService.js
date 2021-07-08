//import * as genresAPI from "./fakeGanreService";
const movies = [{
    _id: "7845123698",
    title: "Bahubali",
    genre: { _id: "789456123", name: "Action" },
    numberInStoke: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03",
    liked:"true"
},
{
    _id: "78478534698",
    title: "KIck",
    genre: { _id: "789456123", name: "Action" },
    numberInStoke: 8,
    dailyRentalRate: 7.5,
    publishDate: "2017-01-25",
    liked:"true"
    },
    {
        _id: "784785323698",
        title: "Swami Vivekand",
        genre: { _id: "789456127", name: "History" },
        numberInStoke: 9,
        dailyRentalRate: 17.5,
        publishDate: "2017-01-25",
        liked:"true"
    },
    {
        _id: "784785369328",
        title: "Ramayan",
        genre: { _id: "789456127", name: "History" },
        numberInStoke: 10,
        dailyRentalRate: 7.5,
        publishDate: "2017-01-25",
       
    },
    {
        _id: "78474323698",
        title: "Mahabharat",
        genre: { _id: "7894561273", name: "Drama" },
        numberInStoke: 9,
        dailyRentalRate: 17.5,
        publishDate: "2017-01-25",
       

    },
    {
        _id: "784852369328",
        title: "Shree Kishna",
        genre: { _id: "7894561273", name: "Drama" },
        numberInStoke: 10,
        dailyRentalRate: 7.5,
        publishDate: "2017-01-25",
       

    }
];


export function getMovie() {
    return movies;
}
 
export function getMovies(id) {
    return movies.find(m => m._id === id);
}