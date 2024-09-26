const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer'); // Import multer

//cloudinary: This is the Cloudinary SDK, which allows you to interact with Cloudinary's API. v2 is the version of the Cloudinary API being used.
//CloudinaryStorage: This is a storage engine that works with Multer to store files directly on Cloudinary.
//multer: A middleware for handling multipart/form-data, which is primarily used for uploading files.


// These credentials are used to authenticate and authorize access to Cloudinary’s API
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Set a storage object with your Cloudinary settings

// It takes a cloudinary instance, which connects it to your configured Cloudinary account.
// params:
// folder: Specifies the folder in Cloudinary where the uploaded files will be stored (Earth_Homes folder).
// allowedFormats: Specifies allowed image formats (png, jpg, jpeg). Files in other formats will be rejected by this configuration.


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Earth_Homes',
        allowedFormats: ["png", "jpg", "jpeg"],
    },
});
module.exports = {
    cloudinary,
    storage,
};
