import User from "@/shared/model/User";
import axios from "axios";

async function fetchUser(): Promise<User> {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data;
};

export default fetchUser;