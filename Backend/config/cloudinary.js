// import { v2 as cloudinary } from "cloudinary";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "drihdohxu",
  api_key: "416278918643992",
  api_secret: "i_0Q9qvalHNhV3YGGwlKeG2WvbQ", // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;
