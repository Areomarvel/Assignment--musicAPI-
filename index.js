const express = require("express");
const app = express();
const port = 4123;
const musicians = [
    {   id: 1,
        ArtistName: "Mia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2i22TL-ZgQGWhi8mK4hTXuHnaK7OhlsViqsoLXaeivQ&s=10",
        SongName: "Dynasty",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784185537/miia-dynasty_1_kiydpl.mp3"
    },
    {
        id: 2,
        ArtistName: "Neoni",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB4TciReSNRbUdALcTbZd2tnq6ggsu6GCdbv5tJSntg&s=10",
        SongName: "Darkside",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784185605/AUD-20260522-WA0015_zrcedw.mp3"
    },
    {
        id: 3,
        ArtistName: "Billie Eilish",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V-_iellc1sd7pDvEaSrLLyzpBel0bopsuiZffNE94A&s=10",
        SongName: "lovely",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784185594/AUD-20260522-WA0014_zmgvda.mp3"
    },
    {
       id: 4,
       ArtistName: "luis fonsi",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8WU2F-mdfenrT1-Q7-tmRCNHF9cTSQZMMQL9lMDiNA&s=10",
       SongName: "Despacito",
       SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784185589/AUD-20260522-WA0040_gcyxrl.mp3"
    },
    {
      id: 5,
      ArtistName: "Katie",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWlkmpeyLRzuEcDjD9fDXsgpCheOQLzMKeWtmphsVeA&s=10",
      SongName: "Where are you ",
      SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784185560/AUD-20260522-WA0024_ovxanj.mp3"
    }
]

app.get("/musicians", (req, res) => {
    res.send(musicians);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});