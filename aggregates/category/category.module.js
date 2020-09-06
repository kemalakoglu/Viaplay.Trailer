'use strict';

const categoryModel = require("./category.model");

async function AddCategory(categoryElem) {
    const category = new categoryModel({
        _id: categoryElem['id'],
        title: categoryElem['title'],
        createDate: Date.now()
    });

    category.save().then(() => {
        console.log("Category is Created. Details; id:" + categoryElem['id'] + ", title: " + categoryElem['title']);
    });
}

async function CheckCategoryIsExist(categoryElem) {

    let response = await categoryModel.findById(categoryElem['id']).exec();

    if (response == null) {
        await AddCategory(categoryElem);
    }
}

module.exports.AddCategory = AddCategory;
module.exports.CheckCategoryIsExist = CheckCategoryIsExist;