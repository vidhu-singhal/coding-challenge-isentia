var appRouter = function (app, request) {
  app.get("/", function (req, res) {
    res.status(200).send("Welcome to RESTful API");
  });

  app.get("/flickr/public", function (req, res) {
    //TODO:vsinghal parameter encoding
    let tags = req.query.tags;
    let tagmode = req.query.tagmode;

    let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

    if(tags) {
      url += `&tags=${tags}`;

      if(tagmode) {
        url += `&tagmode=${tagmode}`;
      }
    }

    console.log('Calling Flickr API URL', url);

    request.get(url, (error, response, body) => {
      if(error) {
        return res.status(500).send(error);
      }

      //TODO:vsinghal Following hack to get away with 'jsonFlickrFeed' function wrapping the body - Find the right way

      body = body ? body.substring(15, body.length-1) : '';

      res.status(200).send(body);
    });
  });
}

module.exports = appRouter;
