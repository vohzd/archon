

// a dumb (pure) function that resolves a promise after a random bit of time
async function someAPI(){
  const rand = Math.round(Math.random() * (3000 - 500)) + 500;
  return new Promise(async (resolve) => {
    setTimeout(() => {
      console.log(`api resolved after ${rand} ms`)
      resolve(`${rand}`)
    }, rand)
  })
}


/* generator that yields PAGES (from an API) */
export async function* mockCreateArchive(website, username, pages){

  while (pages !== 0){
    console.log("mocking API")
    pages--
    yield await someAPI();
  }

  // we're done here
  return;

}
