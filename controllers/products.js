//import model
const Product = require("../models/product")


const getAllProducts = async(req, res) => {
    //so that when there is company included in request even though other request exists the result stilll shows the company results
    const { company,name,featured, sort,select } = req.query;
    const queryObject = {};
    if(company) {
        queryObject.company = company;
        
    }
    if (featured){
        queryObject.featured = featured;
    }
    if (name) {
        //here we add regex to search for name such that even if i type only iphone i get results for both iphone and iphone10
        queryObject.name = { $regex: name, $options: "i"  };
    }
    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace("," ," ");
    
        apiData = apiData.sort(sortFix);
    }
    if(select){
        // let selectFix = select.replace("," ," ");
        let selectFix = select.split("," ).join(" ");

        apiData = apiData.select(selectFix);
    }
    //pegenation
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
    let skip = (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject)
    // to get data from mongodb
    const myData = await apiData
    //send the data as response
        res.status(200).json({myData,nbHits:myData.length})
}

const getAllProductsTesting = async(req, res) => {
        // to get data from mongodb
        const myData = await Product.find(req.query).select("name company")
        //send the data as response
            res.status(200).json({myData})
}

module.exports = {getAllProducts, getAllProductsTesting}