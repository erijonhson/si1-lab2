'use strict';

// Define módulo `Seriesflix`
var Seriesflix = angular.module('SeriesflixApp', 
  [
    'ngAnimate',
    'ngRoute',
    'serie',
    'serieList', 
    'user'
  ]);

/*
Exemplo de Serie:
{
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "142 min",
    "Genre": "Crime, Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 7 Oscars. Another 19 wins & 30 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "9.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        },
        {
            "Source": "Metacritic",
            "Value": "80/100"
        }
    ],
    "Metascore": "80",
    "imdbRating": "9.3",
    "imdbVotes": "1,814,175",
    "imdbID": "tt0111161",
    "Type": "movie",
    "DVD": "27 Jan 1998",
    "BoxOffice": "N/A",
    "Production": "Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
}
*/
