import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // Basic validation
    if (!email.trim() || !email.includes('@') || !name.trim() || !message.trim()) {
      return res.status(422).json({ message: 'Invalid input.' });
    }

    let client;
    try {
      try {
        client = await MongoClient.connect(
          "mongodb+srv://<username>:<password>@cluster0.m36zwsq.mongodb.net/nxtjs-blog?retryWrites=true&w=majority&appName=Cluster0"
        );
      } catch (error) {
        return res.status(500).json({ message: 'Database not connected.' });
      }
      
      const db = client.db();

      const result = await db.collection('contact').insertOne({ email, name, message });
      if (!result.acknowledged) {
        throw new Error('Failed to insert contact form data.');
      }
      return res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error inserting contact form data:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    } finally {
      client?.close();
    }
  }

  // If the method is not POST, return a 405 Method Not Allowed
  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ message: 'Method not allowed.' });
}

export default handler;