const mongoose = require('mongoose');

const contactPersonSchema = new mongoose.Schema({
    contactPersonQrofidId: {
      type: String,
      required: true,
    },
    contactPersonName: {
      type: String,
      required: true,
    },
    contactPersonDesignation: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    profileLink: {
      type: String,
      required: true,
    },
    advertisementId: {
      type: String,
      required: true,
    },
  });
  
  const PROM_ADV_Des_cont_org_adv = mongoose.model(
    "contactPersonSchema",
    contactPersonSchema
  );
  
  module.exports = PROM_ADV_Des_cont_org_adv;