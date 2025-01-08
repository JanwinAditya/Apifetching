const url ="https://cat-fact.herokuapp.com/facts"

const getFacts = async () => {
    console.log("Fetching data...");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(d