const express=require("express");
const router=express.Router({mergeParams:true});   //{mergeParams:true} isse app.js me app.use("/listings/:id/reviews",reviewRouter); ki :id ham access kar payenge
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js")
const reviewController=require("../controllers/reviews.js");

//Reviews
//Post Review Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",
            isLoggedIn,
            isReviewAuthor,
            wrapAsync(reviewController.destroyReview)
);

module.exports=router;