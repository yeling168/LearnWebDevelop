fetch("some.json")
  .then(response => {
    return response.json();
  })
  .then(json => {
    //do something with the json
  })
  .catch(err => {
    console.log(err);
  });
