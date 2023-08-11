import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
return(
  <div>
    {/*Nav Bar*/}
      <NavBar/>

    {/*ItemListContainer*/}
      <ItemListContainer greeting="Hola Mundo!"/>

  </div>
);
}

export default App;
