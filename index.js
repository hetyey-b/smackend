const PORT = 5000;

const config = {
  "/": {
    get: {
      response: {
        status: "OK",
      },
      code: 200,
    },
    post: {
      response: {
        status: "Server error!",
      },
      code: 500,
    },
  },
  "/asd": {
    get: {
      response: "ASD!",
      code: 200,
    },
  },
};

module.exports.runSmackend = function () {
  const express = require("express");

  const app = express();
  const httpStatusCodeRegEx = /^[1-5][0-9][0-9]$/;

  Object.keys(config).forEach((endpoint) => {
    console.log(`Endpoint "${endpoint}"`);

    if (config[endpoint]["get"]) {
      console.log(`>> GET "${endpoint}"`);

      const code = httpStatusCodeRegEx.test(code) ? code : 200;

      app.get(endpoint, (req, res) => {
        console.log(`Received: GET "${endpoint}"`);
        res
          .status(config[endpoint]["get"].code)
          .send(config[endpoint]["get"].response);
      });
    }

    if (config[endpoint]["post"]) {
      console.log(`>> POST "${endpoint}"`);

      const code = httpStatusCodeRegEx.test(code) ? code : 200;

      app.post(endpoint, (req, res) => {
        console.log(`Received: POST "${endpoint}"`);
        res
          .status(config[endpoint]["post"].code)
          .send(config[endpoint]["post"].response);
      });
    }

    if (config[endpoint]["put"]) {
      console.log(`>> PUT "${endpoint}"`);

      const code = httpStatusCodeRegEx.test(code) ? code : 200;

      app.put(endpoint, (req, res) => {
        console.log(`Received PUT "${endpoint}"`);
        res
          .status(config[endpoint]["put"].code)
          .send(config[endpoint]["put"].response);
      });
    }

    if (config[endpoint]["delete"]) {
      console.log(`>> DELETE "${endpoint}"`);

      const code = httpStatusCodeRegEx.test(code) ? code : 200;

      app.delete(endpoint, (req, res) => {
        console.log(`Received DELETE "${endpoint}"`);
        res
          .status(config[endpoint]["delete"].code)
          .send(config[endpoint]["delete"].response);
      });
    }
  });

  app.listen(PORT, () =>
    console.log(`Smackend Server started on port ${PORT}`)
  );
};
