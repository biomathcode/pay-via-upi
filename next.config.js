/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  siteUrl: process.env.SITE_URL || "https://payviaupi.com",
  generateRobotsTxt: true,
  pwa: {
    disable: prod ? false : true,
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
});
