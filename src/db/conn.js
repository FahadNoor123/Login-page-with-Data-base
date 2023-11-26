const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/myUsersList', {// change my userlist according to your Database name
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection Successful');
}).catch((e) => {
  console.log('Connection failed:', e.message);
});
