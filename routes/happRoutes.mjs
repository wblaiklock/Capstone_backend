import express from 'express';
import happCTRL from '../controllers/happController.mjs';
const router = express.Router();

router.route('/').get(happCTRL.readHapp).post(happCTRL.createHapp);

router.route('/:id').put(happCTRL.updateHapp).delete(happCTRL.deleteHapp);

router.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

export default router;
