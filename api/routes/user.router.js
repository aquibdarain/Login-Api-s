const { createUser,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/user.controller')
const router = require("express").Router();

router.post("/add", createUser);
router.get("/", getUsers);
router.get("/:id",getUserByUserId );
router.patch("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;