const express = require('express');
const router = express.Router();

const movies = require('../models/Movie.model'); 

router.get('/movies', (req, res) => {

    movies.find()
      .then(moviesList => {
          console.log( moviesList)
          res.render('movies/movies-list', { moviesList:moviesList })
      })
      .catch(err => console.log(err))



})


router.get("/movies/:moviesId", (req, res, next) => {

    const { moviesId } = req.params

    movies.findById(moviesId)
        .then(movieDetails => {
            console.log(moviesId)
            res.render('movies/movie-details', { movieDetails })
        }).catch(err => {
            next(err)
        })

});

module.exports = router;
