import "./App.css";
import Card from "./Card";

import "./card.css";

function App() {
  return (
    <div className="App">
      <h1 className="heading-style"> List of top 5 Series in 2020</h1>

      <Card
        name="Dark"
        link="https://www.netflix.com/in/title/80100172"
        title=" A Netflix Original Series"
        imgSrc="https://bingeddata.s3.amazonaws.com/uploads/2020/06/Dark-Web-Series-Season-3-Netflix-1.jpg"
      />

      <Card
      name="The Witcher"
      link="https://www.netflix.com/in/title/80189685"
      title="A Netflix Original Series"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOYpVjpOzE-c-RXX72VDybKTcOqpAPZiDMRekOz6f-i65tQ3HizJzN1e4sD02yDZj0BM&usqp=CAU"
      />

      <Card
      name="The Umbrella Academy"
      link="https://www.netflix.com/in/title/80186863"
      title="A Netflix Original Series"
      imgSrc="https://resizing.flixster.com/NQvihFeQ-r89ZXR04ZKjOlsVoH8=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjQxMTc3OC53ZWJw"
      />
      
      <Card
      name="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
      title="A Netflix Original Series"
      imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Stranger_Things_season_2.jpg/220px-Stranger_Things_season_2.jpg"
            />

      <Card
        name="Game of Thrones"
        link="https://www.hotstar.com/in/tv/game-of-thrones/8184"
        title=" A HBO Original Series"
        imgSrc="https://www.shortlist.com/media/imager/202004/47581-original.jpg"
      />
    </div>
  );
}

export default App;
