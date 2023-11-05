// pages/api/todos/index.js
import dbConnect from '../../../lib/dbConnect';
import Todo from '../../../models/Todo';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const todos = await Todo.find({});
      res.status(200).json({ success: true, data: todos });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
