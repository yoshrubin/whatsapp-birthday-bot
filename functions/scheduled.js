var cron = require("node-cron");

exports.initScheduledJobs = () => {
  const everyMinute = cron.schedule("* * * * *", () => {
    console.log("running a task every minute");
  });

  everyMinute.start();

  const checkBirthdayToday = cron.schedule(" * * *", () => {
    // add logic to check for birthdays
  });

  checkBirthdayToday.start();
};
