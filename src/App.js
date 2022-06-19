import ColorCard from "./component/ColorCard";
import TextBox from "./component/Text";
import MediaCard from "./component/MediaCard";

function App() {
  return (
    <>
      <TextBox color="red">"hihi"</TextBox>
      <TextBox color="blue" fontWeight="400" fontSize="300">
        "hihi"
      </TextBox>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ColorCard color="black" />
        <ColorCard color="#1E82CD" />
        <ColorCard color="#FFAAFF" />
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#F0F0F0",
          justifyContent: "center",
        }}
      >
        <MediaCard />
        <MediaCard
          color="red"
          url="https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg"
          heading="CODING CAT"
          text="Oh, he is JUST coding!! How adorable!!"
        />
        <MediaCard
          color="orange"
          url="https://i.pinimg.com/originals/53/25/b9/5325b9a536261e6c37c503326008647a.jpg"
          heading="WEIRD CAT"
          text="Oh, I think he's drunk!"
        />
        <MediaCard
          color="green"
          url="https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg"
          heading="DANCING CAT"
          text="JUST DANCE ALL NIGHT"
        />
        <MediaCard
          color="purple"
          url="https://www.sadanduseless.com/wp-content/uploads/2021/06/tasty.png"
          heading="SALAD CAT"
          text="SALAD is good for your health!"
        />
      </div>
    </>
  );
}

export default App;
