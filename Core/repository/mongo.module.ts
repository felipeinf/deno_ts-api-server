import { MongoClient, Database } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


const client: MongoClient = new MongoClient();
const database: Database = client.database(`${Deno.env.get('MONGO_DATABASE_NAME')}`)

function connect(): void {
  client.connectWithUri(`${Deno.env.get('MONGO_URI')}`);
}

async function find<type>(collection: string, filter?: any) {
  const result: any[] = await database.collection(collection)
    .find(filter);

  return result.map((value: any) => {
    value._id = value._id.$oid;
    return value as type;
  });
}

export const db = client.database("blyke");

export default { connect };
