const express = require('express');
const router = express.Router();
const movies = require('../movies.json');

// 메인 페이지
router.get('/', (req, res, next) => {
    res.send(movies)
});

// 영화 상세 페이지
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id, 10);
    let movie = movies.filter(function(movie){
        return movie.id === id
    });
    res.send(movie)
})

module.exports = router;