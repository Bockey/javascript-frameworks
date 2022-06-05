import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import CoctailItem from "./CoctailItem";

function CoctailList() {
  const [coctails, setCoctails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setCoctails(json.drinks);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="coctails">
      {coctails.map(function (coctail) {
        return (
          <CoctailItem
            key={coctail.idDrink}
            id={coctail.idDrink}
            title={coctail.strDrink}
            alcoholic={coctail.strAlcoholic}
            image={coctail.strDrinkThumb}
          />
        );
      })}
    </div>
  );
}

export default CoctailList;
