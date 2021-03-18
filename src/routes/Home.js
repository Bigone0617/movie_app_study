import React from "react";
import Movie from "../components/Movie";
import axios from "axios";


class Home extends React.Component{
  state = {
    isLoading: true,
    movies : []
  }

  getMovies = async () => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    this.setState({movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;

    return (
      <div>
        { isLoading ? (
          <div>Loading....</div>
        ) : (
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
    )
  }
}

export default Home;
