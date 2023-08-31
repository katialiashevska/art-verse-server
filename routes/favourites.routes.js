const router = require("express").Router()
const Favourite = require("./../models/Favourite.model")
const { isAuthenticated } = require("./../middleware/jwt.middleware")

// GET /favourites - Retrieve favourite artworks
router.get("/", isAuthenticated, (req, res, next) => {
    Favourite.find({ user: req.payload._id })
        .then(allFavourites => {
            res.json(allFavourites)
        })
        .catch(error => {
            next(error)
        })
})

// GET /favourites/:favouriteId - Retrieve one favourite artwork
router.get("/:favouriteId", isAuthenticated, (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findOne({ id: favouriteId, user: req.payload._id })
        .then(foundFavourite => {
            res.status(200).json(foundFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// POST /favourites - Create a new favourite artwork
router.post("/", isAuthenticated, (req, res, next) => {
    Favourite.create({
        id: req.body.id,
        user: req.payload._id,
        title: req.body.title,
        artist: req.body.artist,
        date: req.body.date,
        medium: req.body.medium,
        dimensions: req.body.dimensions,
        altText: req.body.altText,
        image: req.body.image,
        note: req.body.note,
    })
        .then(createdFavourite => {
            res.status(201).json(createdFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// PUT /favourites/:favouriteId - Edit a note on a favourite artwork
router.put("/:favouriteId", isAuthenticated, (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findOneAndUpdate(
        { id: favouriteId, user: req.payload._id },
        { note: req.body.note },
        { new: true }
    )
        .then(updatedFavourite => {
            res.status(200).json(updatedFavourite)
        })
        .catch(error => {
            next(error)
        })
})

// DELETE /favourites/:favouriteId - Delete a favourite artwork
router.delete("/:favouriteId", isAuthenticated, (req, res, next) => {
    const favouriteId = req.params.favouriteId
    Favourite.findOneAndDelete({ id: favouriteId, user: req.payload._id })
        .then(() => {
            res.status(200).json({ message: "Favourite artwork deleted successfully." })
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router
