import './App.css'
import Navigator from './Components/Navigation/Navigator.jsx';
import Router from './Components/Navigation/Router.jsx';
import FilterableProductTable from './Components/FilterableProductTable';

// Array de objetos con productos para el ejemplo del componente FilterableProductTable
const PRODUCTS= [
  {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
  {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
  {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
  {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
  {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
  {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
];

function App() {
  return (
    <>
      <Navigator />
      <Router />
         {/*<FilterableProductTable products={PRODUCTS} />*/}
    </>
  )
}

export default App;


