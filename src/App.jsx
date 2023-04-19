import Navbar from "./app_components/navbar";
import InfoCard from "./app_components/info-card";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container pt-4">
        <h2>Kansas City District</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          viverra odio vel consectetur ultricies. Aenean efficitur, metus sed
          gravida gravida, leo elit suscipit eros, at luctus lorem tortor ac
          massa. Integer sit amet ultrices augue, iaculis sagittis libero. Donec
          a elementum enim. Etiam rutrum iaculis sollicitudin. Pellentesque eget
          pharetra risus, eget pellentesque ante. Maecenas sodales tortor quis
          sapien efficitur, at maximus urna suscipit. Suspendisse sed metus
          neque. Sed velit ipsum, vestibulum porta urna a, facilisis tristique
          turpis. Sed in ipsum ut odio posuere maximus quis vel ante. Ut sed
          facilisis dolor, ut pellentesque lorem. Suspendisse non nulla blandit,
          condimentum mi eget, gravida tellus. Aliquam vitae laoreet orci. Donec
          sit amet sem ac nisi fringilla pulvinar. Aenean vel tempor neque, non
          euismod turpis.
        </p>
        <div className="row">
          <div className="col">
            <InfoCard
              theme="primary"
              headText="BBQ"
              cardTitle="Best BBQ Around"
              cardText="Come to Kansas CIty for good smoked meats..."
            />
          </div>
          <div className="col">
            <InfoCard
              theme="info"
              headText="BBQ"
              cardTitle="Best BBQ Around"
              cardText="Come to Kansas CIty for good smoked meats..."
            />
          </div>

          <div className="col">
            <InfoCard
              theme="warning"
              headText="BBQ"
              cardTitle="Best BBQ Around"
              cardText="Come to Kansas CIty for good smoked meats..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
