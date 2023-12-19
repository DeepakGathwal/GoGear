const mongoose = require('mongoose');
const organizationSchema = new mongoose.Schema({
    organizationQrofid: {
      type: String,
      required: true,
    },
    organizationName: {
      type: String,
      required: true,
    },
    organizationAddress: {
      type: String,
    },
    organizationContactNo: {
      type: String,
    },
    organizationEmailId: {
      type: String,
    },
    websites: {
      type: String,
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
    "organizationSchema",
    organizationSchema
  );
  
  module.exports = PROM_ADV_Des_cont_org_adv;