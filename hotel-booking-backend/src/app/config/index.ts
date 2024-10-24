import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  db_uri: process.env.MONGO_URL,
  salt_rounds: process.env.SALT_ROUNDS,
  secret:process.env.TOKEN_SECRET,
};
