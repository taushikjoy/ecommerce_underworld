import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpveTExIiwidXNlcklkIjoiNjI1ZTYyNjRjZDU3NjgzMGQ2NjI5NzM0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjUzODE3OTQwLCJleHAiOjE2NTQwNzcxNDB9.wDt54k4W-jc2Q5a9Mp0iJ0bssJjzFclcMvdWzWy_pMs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
