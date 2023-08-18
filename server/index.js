import express from "express";
import { supabase } from "./supabase.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("../client/dist"));

app.use(
  cors({
    origin: "https://p4-static.onrender.com",
  })
);
app.options("*", cors());

app.get("/test", async (req, res) => {
  const { data } = await supabase.from("test").select();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
