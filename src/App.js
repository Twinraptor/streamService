import React from 'react';
import './App.css';
import Row from "./components/Row";
import requests from "./requests/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
} 

export default App;
