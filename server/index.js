import express from "express";
import { supabase } from "./supabase.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("../client/dist"));

app.get("/test", async (req, res) => {
  const { data } = await supabase.from("test").select();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
