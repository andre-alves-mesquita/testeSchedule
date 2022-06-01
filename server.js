const express = require("express");
const nodeSchedule = require("node-schedule");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const dt = new Date(2022, 2, 3, 15, 21);

  const job = nodeSchedule.scheduleJob(dt, () => {
    console.log("olá mundo");
  });

  console.log(job.nextInvocation());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
