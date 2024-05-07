const puppeteer = require("puppeteer");

async function getDoc(job) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();



  try {
    // Attempt to navigate to the URL, handling potential 404 errors
    await page.goto(job.osurl, { waitUntil: "networkidle2" });

    // If successful, proceed with PDF generation
    await page.pdf({ path: `ups/${job.auvoId}.pdf` });
  } catch (error) {
    // Handle 404 errors specifically or more general navigation errors
    if (error.name === "NavigationError") {
      console.error(`Error navigating to ${job.osurl}:`, error.message);
      // Optionally, log the error or take an alternative action for 404s
    } else {
      console.error("An error occurred:", error);
      // Handle other potential errors during navigation
    }
  } finally {
    // Always close the browser to avoid resource leaks
    await browser.close();
  }
}

module.exports = {
  getDoc,
};
