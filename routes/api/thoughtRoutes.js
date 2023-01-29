const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  postThought,
  updateThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
