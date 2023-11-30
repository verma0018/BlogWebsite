const mongoose = require("mongoose")

const connectDatabase =async  () => {

    await mongoose.connect('mongodb+srv://user:qwerty18@blogginwebsite.pm8it7p.mongodb.net/?retryWrites=true' ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase