const prod = process.env.NODE_ENV === "production";
module.exports = {
  baseUrl: prod ? "https://app.production.com" : "http://localhost:5500"
};
