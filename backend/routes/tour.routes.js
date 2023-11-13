const express = require("express");
const authorizeMiddleware = require("../middlewares/authorizeMiddlware");
const UserModel = require("../model/user.model");
const TourHistoryModel = require("../model/tourHistory.model");
const TourModel = require("../model/tour.model");

const tourRouter = express.Router();

tourRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)
    // res.send({})
    const singleTourForResponse = await TourModel.findOne({ _id: id });
    // console.log(singleTourForResponse)
    return res.send(singleTourForResponse);
  } catch (error) {
    console.log("error while getting single tour request", error);
  }
});
tourRouter.get("/", async (req, res) => {
  try {
    const { Country, sort, page } = req.query;
    console.log(Country, sort, page);
    let skipBy = page * 9 - 9;

    let filterObj = {};
    if (Country) {
      filterObj["Country"] = Country;
    }

    let tourDataForResponse;
    let totalResult;
    let totalPage;
    if (sort) {
      if (sort == "asc") {
        totalResult = await TourModel.find(filterObj).count()
        totalPage = Math.ceil(totalResult / 9)
        tourDataForResponse = await TourModel.find(filterObj)
          .sort({
            cost: 1,
          })
          .skip(skipBy)
          .limit(9);
      } else {
        totalResult = await TourModel.find(filterObj).count()
        totalPage = Math.ceil(totalResult / 9)
        tourDataForResponse = await TourModel.find(filterObj)
          .sort({
            cost: -1,
          })
          .skip(skipBy)
          .limit(9);
      }
    } else {
      totalResult = await TourModel.find(filterObj).count()
      totalPage = Math.ceil(totalResult / 9)
      tourDataForResponse = await TourModel.find(filterObj)
        .skip(skipBy)
        .limit(9);
    }
   
    console.log('totalpage', totalPage)
    res.send({tourData:tourDataForResponse,totalPage});
    //err
  } catch (error) {
    console.log("error while getting tour request", error);
  }
});

tourRouter.post("/", authorizeMiddleware, async (req, res) => {
  try {
    const input = req.body;
    const userId = req.userId;
    const newObj = { ...input, userId };

    const newTour = await TourHistoryModel.create(newObj);

    res.send(newTour);
  } catch (error) {
    console.log(error);
  }
});
tourRouter.put("/", authorizeMiddleware, async (req, res) => {
  try {
    const input = req.body;
   

    const newTour = await TourHistoryModel.updateOne({_id:input._id},input);

    res.send(newTour);
  } catch (error) {
    console.log(error);
  }
});

module.exports = tourRouter;
