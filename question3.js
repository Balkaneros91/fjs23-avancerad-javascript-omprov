// 3 (4p) Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true
// Använd fetch och async/await, samt felhantering medd try/catch.

// Din kod här
const URL = "https://jsonplaceholder.typicode.com/todos/";

async function fetchData() {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Response status ${res.status}`);
    }
    const data = await res.json();
    console.log(data);

    const myData = [...data];
    console.log(myData);

    if (myData.completed) {
      showData(myData.completed);
    } else {
      console.log("No such data");
    }

    return myData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

function showData(data) {
  const dataSection = document.getElementById("data");

  data.forEach((d) => {
    const dataItem = document.createElement("p");
    dataItem.innerHTML = `<span>${d.completed} </span>`;
    dataSection.appendChild(dataItem);
  });
}

fetchData();
