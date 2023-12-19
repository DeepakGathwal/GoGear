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
  });
  

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
});

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
});

const des_con_org_adv_DetailsSchema = new mongoose.Schema({
  description: [descriptionSchema],
  contactPersonDetails: [contactPersonSchema],
  organizationDetails: [organizationSchema],
  advertisementDetails: [advertisementSchema],
  userId: {
    type: String,
    required: true,
  },
});

const PROM_ADV_Des_cont_org_adv = mongoose.model(
  "PROM-ADV-Des_Con_Org_adv_Details",
  des_con_org_adv_DetailsSchema
);

module.exports = PROM_ADV_Des_cont_org_adv;