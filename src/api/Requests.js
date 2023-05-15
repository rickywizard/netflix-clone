const API_KEY = "3ce659fc89ae979baa6bf843e5431f40";

const requests = {
    fetchMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchDocumenterMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchActionAdvSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchSciFiSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchDocumenterSeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
