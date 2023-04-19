import useAPI from "../app_hooks/useAPI";
import Loader from "../app_components/loader";

function LocationDetail({ params }) {
  const name = params.name;

  const location = useAPI(`locations/${name}`, {
    office: "SPK",
  });

  if (Array.isArray(location)) return <Loader />;

  return (
    <div className="container pb-4">
      {name} Location Details go here
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  );
}

export default LocationDetail;
