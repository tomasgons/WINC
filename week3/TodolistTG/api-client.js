const getAllTasks = async function () {
  const apiUrl = `https://wincacademydatabase.firebaseio.com/Tomas/Tasks.json`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    // console.log("The response from the API in getAllTasks function: ", res);
    const data = await res.json();
    // console.log("The data in getAllTasks function ", data);
    return data;
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
};
// add new tasks to the database
const addtoDo = function (event) {
  const input = { description: todoInput.value, done: false };
  fetch(`https://wincacademydatabase.firebaseio.com/Tomas/Tasks.json`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(input),
  }).then(response => response.json());
};
