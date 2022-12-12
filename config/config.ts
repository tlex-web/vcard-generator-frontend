import dotenv from "dotenv";

dotenv.config({ config: "./config.env" });

export interface ENV {
  NODE_ENV: string | undefined;
  PORT: string | undefined;
}

export interface Config {
  NODE_ENV: string;
  PORT: number;
}
