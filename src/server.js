const app = require('./index');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://nagutao:nagutao@cluster0-ebldr.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(4000);
