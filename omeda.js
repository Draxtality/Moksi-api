// api/omeda.js
export default async function handler(req, res) {
  const { path } = req.query;

  try {
    const response = await fetch(`https://omeda.city/${path}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.toString() });
  }
}
