import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  await deleteDb();
}

async function deleteDb() {
  console.log("Deleting database...");
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
}

(() => {
  // To generate database
  main();
  //to delete database
  //deleteDb();
})();
