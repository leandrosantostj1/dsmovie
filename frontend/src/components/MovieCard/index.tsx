import MovieScore from "components/MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w500_and_h282_face/fq3wyOs1RHyz2yfzsb4sck7aWRG.jpg",
        title: "Back to the Future",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;