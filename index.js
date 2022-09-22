const express = require("express");
const API = require("./api");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/tv/:id", (req, res) => {
  (async () => {
    const tvSeriesId = req.params.id;
    let data;

    // Get details
    try {
      let response = await API.get(`/tv/${tvSeriesId}`);

      data = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all videos of this TV Show
    try {
      let response = await API.get(`/tv/${tvSeriesId}/videos`);

      data["videos"] = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all credits/cast of this TV Show
    try {
      let response = await API.get(`/tv/${tvSeriesId}/credits`);

      data["credits"] = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all images of this TV Show
    try {
      let response = await API.get(`/tv/${tvSeriesId}/images`);

      data["images"] = response.data;
    } catch (e) {
      console.error(e);
    }

    res.json(data);
  })();
});

app.get("/movie/:id", (req, res) => {
  (async () => {
    const movieSeriesId = req.params.id;
    let data;

    // Get details
    try {
      let response = await API.get(`/movie/${movieSeriesId}`);

      data = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all videos of this movie Show
    try {
      let response = await API.get(`/movie/${movieSeriesId}/videos`);

      data["videos"] = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all credits/cast of this movie Show
    try {
      let response = await API.get(`/movie/${movieSeriesId}/credits`);

      data["credits"] = response.data;
    } catch (e) {
      console.error(e);
    }

    // Get all images of this movie Show
    try {
      let response = await API.get(`/movie/${movieSeriesId}/images`);

      data["images"] = response.data;
    } catch (e) {
      console.error(e);
    }

    res.json(data);
  })();
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
