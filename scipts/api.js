const API_BASE = "http://127.0.0.1:8000";

export async function getBuildings() {
  const res = await fetch(`${API_BASE}/buildings`);
  return res.json();
}