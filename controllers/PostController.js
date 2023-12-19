const catchAsyncError = require("../middelwares/catchAsyncError");
const ErrorHandler = require("../utils/Errorhandler");
const GoGear = require('../Model/GoGear');
const contactDB = require('../Model/person')


exports.goGear = catchAsyncError(async(req,res) =>{

    const {descriptionSchema,contactPersonDetails,organizationDetails,advertisementDetails,userId} = req.body
   let contactPersonDetailsSchema;
    if(contactPersonDetails){
    const { contactNo,contactPersonDesignation,contactPersonQrofidId,contactPersonName, address, profileLink, emailId,advertisementId} = contactPersonDetails
    contactPersonDetailsSchema = {contactPersonQrofidId:contactPersonQrofidId,contactPersonName:contactPersonName, // first
    contactPersonDesignation:contactPersonDesignation,
    address:address,
    contactNo:contactNo,
    emailId:emailId,
    profileLink:profileLink,
    advertisementId:advertisementId}
}
    let organizationDetailsSchema
  if(organizationDetails){
    const { organizationQrofid,organizationName,organizationAddress,organizationContactNo,organizationEmailId,websites,OrginizeadvertisementId  } = organizationDetails
    organizationDetailsSchema = {organizationQrofid:organizationQrofid,
        organizationName:organizationName,
        organizationAddress:organizationAddress,
        organizationContactNo:organizationContactNo,
        organizationEmailId:organizationEmailId,
        websites:websites,advertisementId:OrginizeadvertisementId}
  }


  let advertisementDetailsData
  if(advertisementDetails){
    const {advertisementTitle, typeOfAdvertisement, releatedTo, subCard,qrofidId,slogan, purpose,duration,adAdvertisementId} = advertisementDetails

    advertisementDetails = {advertisementTitle:advertisementTitle,
        typeOfAdvertisement:typeOfAdvertisement,
        releatedTo:releatedTo,
        subCard:subCard,
        qrofidId:qrofidId,
        slogan:slogan,
        purpose:purpose,
        duration:duration,
        advertisementId:adAdvertisementId}
}
    let descriptionSchemadata
 
 if(descriptionSchema){
    const {advertisementId, description} = descriptionSchema;
    console.log(descriptionSchema);
     descriptionSchemadata = {description : description, advertisementId:advertisementId}
 }

 
     const addData = await GoGear.create({description:descriptionSchemadata,contactPersonDetails:contactPersonDetailsSchema,
 organizationDetails:organizationDetailsSchema,
 advertisementDetails:advertisementDetailsData,
 userId:userId
     })
     
 if(!addData) return res.status(400).json({message : "Failed"})
 else {
   
     await addData.save();
     return res.status(200).json({message : "success"})
 }
 
 
})





exports.getGear = catchAsyncError(async(req,res) =>{
   /**
    * 
    *  here to populate data from multiple models we have give userId on user Schema
     like this one  =>user :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

}}]


for saveing time i assuming all model have userId
    */
const {userId} = req.query;

/**
 * here is the query to get data from all databases by a single query ....
 * the main thing is we have to a specific field on all databases to get data 
 */
const data = contactDB.aggregate({
    // if want all data then remove match filed from query
    $match: {
        contactPersonQrofidId: userId
    }
},
{
    $lookup: {
        from: "advertisementSchema",
        localField: "userId",
        foreignField: "userId",
        as: "advertisementData"
    }
},
{
    $unwind: "$advertisementData"
},
{
    $lookup: {
        from: "descriptionSchema",
        localField: "userId",
        foreignField: "userId",
        as: "descriptionData"
    }
},
{
    $unwind: "$descriptionData"
},
{
    $lookup: {
        from: "organizationSchema",
        localField: "userId",
        foreignField: "userId",
        as: "organizationData"
    }
},
{
    $unwind: "$organizationData"
},
{
    $project: {
        _id: 0,
        PersonQrofidId: "$contactPersonQrofidId",
        PersonName: "$contactPersonName",
        PersonDesignation: "$contactPersonDesignation",
        address: "$address",
        contactNo: "$contactNo",
        emailId: "$emailId",
        profileLink: "$profileLink",
        advertisementId: "$advertisementId",
        advertisementTitle: "$advertisementData.advertisementTitle",
        typeOfAdvertisement: "$advertisementData.typeOfAdvertisement",
        releatedTo: "$advertisementData.releatedTo",
        subCard: "$advertisementData.subCard",
        qrofidId: "$advertisementData.qrofidId",
        slogan: "$advertisementData.slogan",
        ad_advertisementId: "$advertisementData.advertisementId",
        purpose: "$advertisementData.purpose",
        duration: "$advertisementData.duration",
        description: "$descriptionData.description",
        dec_advertisementId: "$descriptionData.advertisementId",
        organizationQrofid: "$organizationData.organizationQrofid",
        organizationName: "$organizationData.organizationName",
        organizationAddress: "$organizationData.organizationAddress",
        organizationContactNo: "$organizationData.organizationContactNo",
        organizationEmailId: "$organizationData.organizationEmailId",
        websites: "$organizationData.websites",
        org_advertisementId: "$organizationData.advertisementId",
        userId: "$userId"
    }
});

if(!data) return res.status(400).json({message : "Failed"})
else {
    return res.status(200).json({data})
}
})