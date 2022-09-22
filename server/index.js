const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/allTypes", (req, res) => {

  let allTypes = ['A', 'B', 'C', 'D', 'E', 'F'];
  res.json({ types: allTypes});
});


app.get("/api/getSubTypes", (req, res) => {

  let subTypes = {
  	A: ['ML', 'CP', 'Peshwa'],
  	B: ['ML', 'Pagdi', 'MK', 'Chaurang', 'Dagadu'],
  	C: ['ML', 'BL', 'Pagdi', 'Peshwa', 'CP', 'Kamal'],
  	D: ['ML', 'BL', 'Peshwa', 'Philips', 'Dagadu'],
  	E: ['ML', 'Kamal'],
  	F: ['ML', 'MK', 'Furniture'],
  }
  let receivedMainType = req.query.mainType;

  console.log(`received main type ${receivedMainType}`);
  var response = subTypes[receivedMainType];
  res.json({response});
});

app.listen(PORT, ()=> {
	console.log(`Server listening on ${PORT}`);
});