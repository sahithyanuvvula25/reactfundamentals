function ProductCard({productname,productprice,isavail})
{

return(
    <div>
        <p>ProductName:{productname}</p>
        <p>ProductPrice:{productprice}</p>
        <p>
        {isavail===true? "product is available" :"product is not available"}
        </p>
    </div>
)
}
export default ProductCard;