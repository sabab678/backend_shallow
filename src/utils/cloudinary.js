import { v2 as cloudinary } from "cloudinary"

import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


(async function (localFilePath) {
    try {
        if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("File is uploaded on this URL:",response.url)
        
        return response.url

    }
    catch (error) {
        console.log("Error on cloudiary:",error)
        fs.unlinkSync(localFilePath)
        return null

    }

})();





export {uploadOnCloudinary}















