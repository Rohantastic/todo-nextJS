// pages/api/todos/[id].js
import dbConnect from '../../../lib/dbConnect';
import Todo from '../../../models/Todo';

export default async function handler(req, res) {
  await dbConnect();

  const todoId = req.query.id;

  if (req.method === 'GET') {
    try {
      const todo = await Todo.findById(todoId);
      if (!todo) {
        return res.status(404).json({ success: false, error: 'Todo not found' });
      }
      res.status(200).json({ success: true, data: todo });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (req.method === 'PUT') {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedTodo) {
        return res.status(404).json({ success: false, error: 'Todo not found' });
      }
      res.status(200).json({ success: true, data: updatedTodo });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const deletedTodo = await Todo.deleteOne({ _id: todoId });
      if (deletedTodo.deletedCount === 0) {
        return res.status(404).json({ success: false, error: 'Todo not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
