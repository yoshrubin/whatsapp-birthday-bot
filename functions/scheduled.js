var cron = require("node-cron");

exports.initScheduledJobs = () => {
  const everyMinute = cron.schedule("* * * * *", () => {
    console.log("running a task every minute");
  });

  everyMinute.start();
};
