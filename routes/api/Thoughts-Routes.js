const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,

} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);

// /api/users/:userId
router
.route('/:ThoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)

module.exports = router;