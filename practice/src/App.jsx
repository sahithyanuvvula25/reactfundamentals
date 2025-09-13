
import ProductCard from "./ProductCard.jsx"
function App() {
 let ProductName="himalaya"
 let ProductPrice=230
 let IsAvailable=true

  return (
    <>
          <ProductCard productname={ProductName} productprice={ProductPrice} isavail={IsAvailable}/>
    </>


  )
}

export default App
