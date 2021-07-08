import React, { Component } from 'react';
import { getMovie } from '../services/fakeMoviesService';
import { getGenres } from '../services/fakeGanreService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    }
    componentDidMount() {
        const genres = [{name:'All Genres '}, ...getGenres()]
        this.setState({ movies: getMovie(), genres })
    }
    hendleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }
    handelPageChange = page => {
        this.setState({ currentPage: page });
    }
    hendelLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    hendelGenreSelect = genre => {
        this.setState({ selectedGenre: genre , currentPage:1});
    }
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: AllMovies } = this.state;
        if (count === 0)
            return <p>Ther are no movies in The Database.</p>;
        const filtered = selectedGenre && selectedGenre._id ? AllMovies.filter(m => m.genre._id === selectedGenre._id) : AllMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.hendelGenreSelect} />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in the databse. </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Ganre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie._id} >
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStoke}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td> <Like liked={movie.liked} onClick={() => this.hendelLike(movie)} /></td>
                                    <td><button onClick={() => this.hendleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>))}
                        </tbody>
                    </table>
                    <Pagination
                        itemCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handelPageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
