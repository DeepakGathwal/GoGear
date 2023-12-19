const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
    description: {
      type: String,
      maxlength: 300,
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
    "descriptionSchema",
    descriptionSchema
  );
  
  module.exports = PROM_ADV_Des_cont_org_adv;