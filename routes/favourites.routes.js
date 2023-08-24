const router = require("express").Router()
const Favourite = require("./../models/Favourite.model")

router.get("/", (req, res, next) => {
    Favourite.find()
        .then(allFavourites => {
            res.json(allFavourites)
        })
        .catch(error => {
            next(error)
        })
})

router.post("/", (req, res, next) => {
    Favourite.create({
        artist: req.body.artist,
        title: req.body.title,
        date: req.body.date,
        medium: req.body.medium,
        dimensions: req.body.dimensions,
        image: req.body.image,
        comment: req.body.comment,
    })
        .then(createdFavourite => {
            res.status(201).json(createdFavourite)
        })
        .catch(error => {
            next(error)
        })
})

router.get("/:favouriteId", (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findById(favouriteId)
        .then(foundFavourite => {
            res.status(200).json(foundFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// router.put("/:cohortId", (req, res, next) => {
//     const cohortId = req.params.cohortId
//     Cohort.findByIdAndUpdate(cohortId, req.body, { new: true })
//         .then(updatedCohort => {
//             res.status(200).json(updatedCohort)
//         })
//         .catch(error => {
//             next(error)
//         })
// })

router.delete("/:favouriteId", (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findByIdAndDelete(favouriteId)
        .then(() => {
            res.status(200).send()
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router
