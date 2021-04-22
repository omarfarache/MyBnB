import cloudinary from "Cloudinary";

export const Cloudinary = {
    upload: async (image: string) => {
        const res = await cloudinary.v2.uploader.upload(image, {
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
            api_name: process.env.CLOUDINARY_NAME,

            folder: "TH_Assets/"

        });
        return res.secure_url;
    }
}