import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./homePage.scss";
import requests from "../../api/Requests";

const HomePage = ({ type }) => {

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {(!type || type === "series") && (
                <List
                    title="NETFLIX ORIGINALS"
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                />
            )}
            
            {(!type || type === "movies") && (
                <>
                    <List
                        title='Trending Now'
                        fetchUrl={requests.fetchTrending}
                    />
                    <List
                        title='Top Rated'
                        fetchUrl={requests.fetchTopRated}
                    />
                    <List
                        title='Action Movies'
                        fetchUrl={requests.fetchActionMovies}
                    />
                    <List
                        title='Adventure Movies'
                        fetchUrl={requests.fetchAdventureMovies}
                    />
                    <List
                        title='Comedy Movies'
                        fetchUrl={requests.fetchComedyMovies}
                    />
                    <List
                        title='Horror Movies'
                        fetchUrl={requests.fetchHorrorMovies}
                    />
                    <List
                        title='Romance Movies'
                        fetchUrl={requests.fetchRomanceMovies}
                    />
                    <List
                        title='Science Fiction Movies'
                        fetchUrl={requests.fetchSciFiMovies}
                    />
                    <List
                        title='Animation Movies'
                        fetchUrl={requests.fetchAnimationMovies}
                    />
                    <List
                        title='Drama Movies'
                        fetchUrl={requests.fetchDramaMovies}
                    />
                    <List
                        title='Documenter Movies'
                        fetchUrl={requests.fetchDocumenterMovies}
                    />
                </>
            )}

            {(!type || type === "series") && (
                <>
                    <List
                        title='Action & Adventure Series'
                        fetchUrl={requests.fetchActionAdvSeries}
                    />
                    <List
                        title='Comedy Series'
                        fetchUrl={requests.fetchComedySeries}
                    />
                    <List
                        title='Crime Series'
                        fetchUrl={requests.fetchCrimeSeries}
                    />
                    <List
                        title='Science Fiction & Fantasy Series'
                        fetchUrl={requests.fetchSciFiSeries}
                    />
                    <List
                        title='Animation Series'
                        fetchUrl={requests.fetchAnimationSeries}
                    />
                    <List
                        title='Drama Series'
                        fetchUrl={requests.fetchDramaSeries}
                    />
                    <List
                        title='Documenter Series'
                        fetchUrl={requests.fetchDocumenterSeries}
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;