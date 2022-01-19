import Food from '../models/Food.js';

// Search food in db
export const search_food = async (req, res) => {
    try {
        // Query 20 items of the food db based upon textScore of user's search
        const results = await Food.find(
            {$text: {$search: req.body.search}},
            {score: {$meta: 'textScore'}}
        ).sort({score: {$meta: 'textScore'}}).limit(20);

        res.status(200).json(results);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}