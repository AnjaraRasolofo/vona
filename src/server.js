const dotenv = require("dotenv");
const { AppDataSource } = require("./data-source.js");
const app = require("./app.js");


dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});