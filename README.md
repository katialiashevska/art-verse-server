# Art-Verse: API Documentation

This documentation provides an overview of the available routes and data models for the Art-Verse API.

For the front-end documentation and the overall project description, see the _art-verse_ repo.

## Favourites routes

The API offers a variety of routes to work with favourite artworks. Each route is associated with a specific HTTP verb and URL, allowing you to perform CRUD (Create, Read, Update, and Delete) actions on the data.

| HTTP verb | URL             | Request body | Action                                            |
| --------- | --------------- | ------------ | ------------------------------------------------- |
| GET       | `/`             | (empty)      | Returns all the favourite artworks in JSON format |
| GET       | `/:favouriteId` | (empty)      | Returns the specified favourite artwork by id     |
| POST      | `/`             | JSON         | Creates a new favourite artwork                   |
| PUT       | `/:favouriteId` | JSON         | Updates the specified favourite artwork by id     |
| DELETE    | `/:favouriteId` | (empty)      | Deletes the specified favourite artwork by id     |

## Models

### User Model

| Field      | Data Type  | Description                                        |
| ---------- | ---------- | -------------------------------------------------- |
| `name`     | _`String`_ | User's name. Required.                             |
| `email`    | _`String`_ | User's email address. Required, unique, lowercase. |
| `password` | _`String`_ | User's password. Required.                         |

### Favourite Model

| Field        | Data Type    | Description                                                                        |
| ------------ | ------------ | ---------------------------------------------------------------------------------- |
| `id`         | _`String`_   | Identifier from the external API used as the main id for all operations. Required. |
| `user`       | _`ObjectId`_ | User associated with the favourite artwork. Required.                              |
| `artist`     | _`String`_   | Author of the artwork. Required.                                                   |
| `title`      | _`String`_   | Title of the artwork. Required.                                                    |
| `date`       | _`String`_   | Date of creation. Required.                                                        |
| `medium`     | _`String`_   | Medium of creation. Required.                                                      |
| `dimensions` | _`String`_   | Artwork dimensions. Required.                                                      |
| `image`      | _`String`_   | Artwork image. Required.                                                           |
| `note`       | _`String`_   | Personalised note added by the user to each artwork.                               |
