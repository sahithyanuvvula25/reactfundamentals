
function ProductCard(product)
{
    
return(
    <div className="container">
        <p>ProductName:{product.productname}</p>
        <p>ProductPrice:{product.productprice}</p>
      <p> 
     {product.isavail===true ? " product is available":"product is not available"}
        </p>
    </div>
)
}
export default ProductCard;