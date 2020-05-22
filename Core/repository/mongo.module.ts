import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


const client = new MongoClient();

async function connect() {
  const uri: string = Deno.env.get('MONGO_URI') || '';
  console.log(uri);
  client.connectWithUri(uri);
}

export const db = client.database("blyke");

export default { connect };
