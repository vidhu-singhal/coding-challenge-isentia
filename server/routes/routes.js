var appRouter = function (app, request) {
  app.get("/", function (req, res) {
    res.status(200).send("Welcome to RESTful API");
  });

  app.get("/flickr/public", function (req, res) {
    var tags = req.query.tags;
    //TODO: parameter encoding
    request.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + tags, (error, response, body) => {
      if(error) {
        return res.status(500).send(error);
      }

      res.status(200).send(body ? JSON.parse(body) : '');
    });
  });
}

module.exports = appRouter;
