

// a dumb (pure) function that resolves a promise after a random bit of time
async function _someAPI(){
  const rand = Math.round(Math.random() * (3000 - 500)) + 500;
  return new Promise(async (resolve) => {
    setTimeout(() => {
      return resolve(`${rand}`)
    }, rand)
  })
}

let jobs = [];
function _getJobIndex(jobName, website, username){

  console.log(website)
  console.log(username)
  const subject = `${website}/${username}`;

  console.log(subject)
  const newItem = {
    jobName,
    subject,
    currentItem: 0,
    totalItems: 0,
    done: false
  };

  /*
    website and username are our unique identifiers
    if you already have a job here that matches both, you cant push another one on the pile until its done
  */

  if (jobs.length === 0){ jobs.push(newItem) }
  const existingIndex = jobs.findIndex((item) => item.subject === subject );

  console.log("SECOND ONE SHOULD BE -1")
  console.log(existingIndex)
  if (existingIndex === -1){ jobs.push(newItem);}
  return jobs.findIndex((item) => item.subject === subject );
}

export async function mockJob(ws, website, username){
  const jobIndex = _getJobIndex("mockCreateArchive", website, username);
  const pages = Math.floor(Math.random() * 30) + 5;
  let currentPage = 1;
  const mockGenerator = mockCreateArchive(website, username, pages);
  jobs[jobIndex].totalItems = pages;

  while (currentPage < pages){
    currentPage++;
    jobs[jobIndex].currentItem = currentPage;
    ws.send(JSON.stringify({ ...jobs[jobIndex], jobIndex }));
    await mockGenerator.next();
  }

  console.log("we are done here")
  jobs[jobIndex].done = true;
  ws.send(JSON.stringify({ ...jobs[jobIndex], jobIndex }));

}


/* generator that yields PAGES (from an API) */
export async function* mockCreateArchive(website, username, pages){
  for (let i = 0; i <= pages; i++){
    yield await _someAPI();
  }
  return;
}
