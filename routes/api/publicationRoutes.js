const router = require("express").Router();
const {
    getPublications,
    getSinglePublication,
    createPublication,
    updatePublication,
    deletePublication,
    createComment,
    deleteComment,
    updateComment,
} = require("../../controllers/publicationController");

// /api/publications
router.route("/").get(getPublications).post(createPublication);

// /api/publications/:publicationId
router
    .route("/:publicationId")
    .get(getSinglePublication)
    .put(updatePublication)
    .delete(deletePublication);

// /api/publications/:publicationId/comment
router.route("/:publicationId/comment").post(createComment);

// /api/publications/:publicationId/comment/:commentId
router
    .route("/:publicationId/comment/:commentId")
    .put(updateComment)
    .delete(deleteComment);

module.exports = router;
