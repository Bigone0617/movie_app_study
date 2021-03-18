function Movie({id, year, title, summary, poster, genres}){
    return (
        <div>
            <img src={poster} alt={title}></img>
            <div>   
                <h1>{title}</h1>
                <ul>
                    {genres.map((genre, index) => (
                        <li key={index}>
                           {genre} 
                        </li>
                    ))}
                </ul>
                <h5>{year}</h5>
                <h5>{summary}</h5>
            </div>
        </div>
    )
}
export default Movie;