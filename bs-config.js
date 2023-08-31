module.exports = {
  files: ["views/**/*.ejs", "public"],
  proxy: "http://localhost:3000", // Your server URL
  port: 3000, // BrowserSync UI port
  ui: { port: 3001 }, // BrowserSync UI port
  open: false, // Disable auto opening of browser
  notify: false, // Disable browser notifications
};
