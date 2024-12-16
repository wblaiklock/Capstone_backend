import express from 'express';
import todoCTRL from '../controllers/todoController.mjs';
const router = express.Router();

router.route('/').get(todoCTRL.readTodo).post(todoCTRL.createTodo);

router.route('/:id').put(todoCTRL.updateTodo).delete(todoCTRL.deleteTodo);

router.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

export default router;
