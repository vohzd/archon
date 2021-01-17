export default async ({ store }) => {
  console.log("middleware: initDB")
  await store.dispatch("initDB");
};
