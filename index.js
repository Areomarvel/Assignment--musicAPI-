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
    },
    {
        id: 6,
        ArtistName: "David kushner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vCxcjod59t6d4-FJQgOkvhTLZ6oaIPhkoYPl5ECU5Q&s=10",
        SongName: "Daylight",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784188091/AUD-20260522-WA0013_qsangt.mp3"
    },
    {
        id: 7,
        ArtistName: "Halsey",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnR5tHECqXI6UZFLofvnlJFvs31Wrz6wgsOPyQDoqeg&s=10",
        SongName: "Without me",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784188320/AUD-20260522-WA0016_rmkmpc.mp3"
    },
    {
        id: 8,
        ArtistName: "sia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-1ZFyohlwIG2cPldOQENrjI6966UrI_FERRr5ZqvFw&s=10",
        SongName: "chandelier",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784188538/AUD-20260522-WA0022_dlw8mz.mp3"
    },
    {
        id: 9,
        ArtistName: "Demi Lovato",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCH8zAz6zCkZpsDnDzEztGRINHwcP-ZhnATtBvKaMtA&s=10",
        SongName: "Heart Attack",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784188774/AUD-20260522-WA0026_tjllhh.mp3"
    },
    {
        id: 10,
        ArtistName: "Conor Maynard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQWA5gZg_nReoaphUs-EKTgtIpY6mHeeGdHd0HFm2nQ&s=10",
        SongName: "Someone you loved",
        SongUrl: "https://res.cloudinary.com/r5nd34og/video/upload/v1784188962/AUD-20260522-WA0017_scufna.mp3"
    }

]

app.get("/", (req, res) => {
    res.send("Welcome to My music API");
    console.log('marvellous');
    
});


app.get("/musicians", (req, res) => {
    res.send(musicians);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});