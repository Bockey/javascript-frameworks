import CoctailList from "../coctails/Coctails";
import Heading from "../layout/Heading";

function Home() {
  return (
    <>
      <Heading>List of coctails</Heading>
      <CoctailList />
    </>
  );
}

export default Home;
