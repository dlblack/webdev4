import useAPI from "../app_hooks/useAPI";

function LocationList() {
  const locations = useAPI("catalog/LOCATIONS", {
    office: "SPK",
    "page-size": 1000,
  });

  return (
    <ul className="list-group">
      {locations
        .filter((loc) => {
          if (loc.kind === "PROJECT") return true;
          return false;
        })
        .map((loc, i) => {
          return (
            <li key={i} className="list-group-item">
              {loc["public-name"]}
            </li>
          );
        })}
    </ul>
  );
}

export default LocationList;
