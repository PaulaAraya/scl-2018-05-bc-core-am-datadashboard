const userJson = "https://raw.githubusercontent.com/PaulaAraya/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/users.json"
const progressJson = "https://raw.githubusercontent.com/PaulaAraya/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json"

const cohortJson = "https://raw.githubusercontent.com/PaulaAraya/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts.json"

let users = null;
let cohorts = null;
let progresses = null;

fetch(userJson)
  .then(response => response.json())
  .then(data => {
    users = data;
    loading();
  });

fetch(cohortJson)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    loading();
  });

fetch(progressJson)
  .then(response => response.json())
  .then(data => {
    progresses = data;
    loading();
  });

  function loading() {
    if (users && cohorts && progresses) {
      //convierto los objetos de json a array
      const users = Object.entries(userJson);
      const cohorts = Object.entries(cohortJson);
      const progresses = Object.entries(progressJson);
      //match entre user y progress
      
      const courses = users.forEach((student) => { 
        user.find(user => user[1].id === progress[0])
          return console.log(courses);
      });
    }
  }
