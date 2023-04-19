import useAPI from "../app_hooks/useAPI";
import Loader from "./loader";

function LocationList() {
  const locations = useAPI("catalog/LOCATIONS", {
    office: "SPK",
    "page-size": 1000,
  });

  if (Array.isArray(locations)) return <Loader />;

  return (
    <ul className="list-group">
      {locations.entries
        .filter((loc) => {
          if (loc.kind === "PROJECT") return true;
          return false;
        })
        .map((loc, i) => {
          return (
            <a
              key={i}
              href={`/locations/${loc.name}`}
              className="list-group-item list-group-item-action"
            >
              {loc["public-name"]}
            </a>
          );
        })}
    </ul>
  );
}

export default LocationList;
