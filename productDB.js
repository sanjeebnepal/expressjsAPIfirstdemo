require("dotenv").config();

const connectDB = require("./mongodb/connect")
const Product = require("./models/product")
const ProductJson = require("./products.json");


const start = async() => {
    try {
        await connectDB(process.env.MONGODBURI);
        //to delete existing products
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success")

    } catch(error){
        console.log(error)
    }
}

start();