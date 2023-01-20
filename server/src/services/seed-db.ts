import { connection } from "mongoose";
import { dataOverallStat, dataProduct, dataUser } from "../data";
import { Product, ProductStats, User } from "../models";

async function seedDB() {
  try {
    const { db } = connection;

    // Get all collections
    const collections = await db.listCollections().toArray();

    // Create an array of collection names and drop each collection
    collections
      .map((collection) => collection.name)
      .forEach(async (collectionName) => {
        db.dropCollection(collectionName);
      });

    await User.insertMany(dataUser);
    await Product.insertMany(dataProduct);
    await ProductStats.insertMany(dataOverallStat);
  } catch (e) {
    console.log(e);
  }
}
export default seedDB;
