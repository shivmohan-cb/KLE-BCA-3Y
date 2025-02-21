const fs = require("fs");
const { stringify } = require("querystring");

const readData = () => {
    const data = fs.readFileSync("data.json", { encoding: "utf-8" });
    return data;
}

const convertToJson = (data) => JSON.parse(data);

const postData = (userObject) => {
    const data = readData();// array
    console.log(typeof data);
    const JsonData = JSON.parse(data);
    JsonData.push(userObject);
    const stringifyData = JSON.stringify(JsonData);//
    fs.writeFileSync("data.json", stringifyData);
    return true;
}

const deleteOneData = (id) => {
    const data = convertToJson(readData());// json format data
    const find = data.find(elm => elm.id == id);//find data
    if (find) {//if found the object
        const filter = data.filter(elm => elm.id != id);
        const stringifyData = JSON.stringify(filter);
        fs.writeFileSync("data.json", stringifyData);
        return true;
    } else {
        return false;// if data is not found 
    }
}

const updateOneData = (id, userObject) => {
    const data = convertToJson(readData());
    const index = data.findIndex(elm => elm.id == id);// index of the object.id
    if (index >= 0) {// if data found
        // update data
        data[index] = {
            ...data[index],
            ...userObject
        }
        const stringifyData = JSON.stringify(data);
        fs.writeFileSync("data.json", stringifyData);
        return true;
    } else {// if data not found
        return false;
    }
}

module.exports = {
    readData,
    postData,
    deleteOneData,
    updateOneData
}