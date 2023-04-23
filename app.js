const express = require('express');
const app = express();
const loader = require('./loader');
const sequelize = require('./Util/db');
const personRoutes = require('./routes/Person');
var cors = require('cors')


app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  console.log('API Called');
  res.json({ message: "Hello from server!" });
});

app.get('/', (req, res) => {
  res.send({
    name: 'Home Page',
    id: 123
  });
});

app.use('/person', personRoutes);

const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
});