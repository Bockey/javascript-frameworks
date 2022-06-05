import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_DETAIL } from "../../constants/api";
import CoctailDetail from "../coctails/CoctailDetails";

function Detail() {
  const [coctail, setCoctail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/");
  }

  const url = API_DETAIL + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setCoctail(json.drinks);
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
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="coctails">
      {coctail.map(function (coctail) {
        return (
          <CoctailDetail
            key={coctail.idDrink}
            title={coctail.strDrink}
            alcoholic={coctail.strAlcoholic}
            category={coctail.strCategory}
            instructions={coctail.strInstructions}
          />
        );
      })}
    </div>
  );
}

export default Detail;
