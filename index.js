"use strict";

const puppeteer = require("puppeteer");

(async () => {
  console.log("Starting Chrome Browser");

  let args = ["--no-sandbox", "--disable-gpu"];

  // Comment this line to fix the issue.
  args.push("--disk-cache-dir=/dev/null");

  const browser = await puppeteer.launch({
    args: args
  });
  const page = await browser.newPage();
  await page.goto("https://google.com");

  await browser.close();
})();
