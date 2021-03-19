import React from "react";
import Movie from "../components/Movie";
import axios from "axios";


class Home extends React.Component{
  state = {
    isLoading: true,
    movies : [],
    searchMovie: undefined
  }

  getMovies = async () => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    this.setState({movies, isLoading : false});
  }

  searchingMovie = (e) => {
    this.setState({searchMovie : e.target.value});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies, searchMovie} = this.state;

    return (
      <div>
        { isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            <div>
              <input 
                placeholder="영화명"
                value={searchMovie}
                onChange={this.searchingMovie}
              />
            </div>
            <div>
              {(searchMovie !== undefined && searchMovie !== "") ? (
                <div>
                  {movies.map((movie, index) => {
                    if(movie.title.toLowerCase().includes(this.state.searchMovie.toLowerCase())){
                      return (
                        <Movie 
                          key = {index} 
                          id = {movie.id}
                          title = {movie.title}
                          year = {movie.year}
                          summary = {movie.summary}
                          poster = {movie.medium_cover_image}
                          genres = {movie.genres}
                        />
                      )
                    }
                  })

                  }
                </div>
              ):(
                <div>
                  {movies.map((movie, index) => (
                    <Movie 
                      key = {index} 
                      id = {movie.id}
                      title = {movie.title}
                      year = {movie.year}
                      summary = {movie.summary}
                      poster = {movie.medium_cover_image}
                      genres = {movie.genres}
                    />
                  ))}
                </div>
              )}
              
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home;
