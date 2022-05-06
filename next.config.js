/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    disable: prod ? false : true,
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
});
