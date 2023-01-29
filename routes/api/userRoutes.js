const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriends,
  deleteFriends,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

router
  .route("/:userId/friends/:friendId")
  .post(addFriends)
  .delete(deleteFriends);

module.exports = router;
