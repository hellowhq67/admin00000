/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Match any API route
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000", // Set your frontend origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
      {
        source: "/api/products/:path*", // Match any API route
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your frontend origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
      {
        source: "/api/products/total/:path*", // Match any API route
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your frontend origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  }, 
  
};

module.exports = nextConfig;
