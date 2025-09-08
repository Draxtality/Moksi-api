export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Missing path parameter" });
  }

  // path kan een array zijn → joinen
  const apiPath = Array.isArray(path) ? path.join("/") : path;

  try {
    const response = await fetch(`https://omeda.city/${apiPath}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.toString() });
  }
}
