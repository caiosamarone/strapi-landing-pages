module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "derq27tar"),
        api_key: env("CLOUDINARY_KEY", "371614867556781"),
        api_secret: env("CLOUDINARY_SECRET", "Sphj0jY1KQ8S6mn6FZHnuv7cxQM"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
