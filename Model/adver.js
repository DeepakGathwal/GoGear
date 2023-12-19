const mongoose = require('mongoose');
const advertisementSchema = new mongoose.Schema({
    advertisementTitle: {
      type: String,
      required: true,
    },
    typeOfAdvertisement: {
      type: String,
    },
    releatedTo: {
      type: String,
      enum: [
        "Organization",
        "Product",
        "Sevice",
        "Project",
        "Event",
        "Offer",
        "Coupon",
      ],
      required: true,
    },
    subCard: {
      type: String,
      enum: [
        "Organization",
        "Product",
        "Service",
        "Project",
        "Event",
        "Offer",
        "Coupon",
      ],
      required: true,
    },
    qrofidId: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    advertisementId: {
      type: String,
      required: true,
    },
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"contactPersonSchema",
       required:[true,'This field is Mandetory'],
     },
  });
  

  const PROM_ADV_Des_cont_org_adv = mongoose.model(
    "advertisementSchema",
    advertisementSchema
  );
  
  module.exports = PROM_ADV_Des_cont_org_adv;