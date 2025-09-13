import "./App.css"
import { useState } from "react"
function App() {

    const [count,setcount]=useState(0)
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [formdata,setformdata]=useState(
  {
email:"",
password:""
  })
const handleClick=(name)=>
{
  console.log("you clicked the button")
  
  alert("hello"+" "+name)
}
const handlechange=(event)=>{
// console.log(event.target.name)
// console.log(event.target.value)
setformdata({
  ...formdata,
  [event.target.name]:event.target.value
})
}
const handlesubmit=(event)=>{

  event.preventDefault();
alert(`email: ${formdata.email} \n password: ${formdata.password} \n you are logged in `)
}

// const handleemail=(event)=>
// {
// setemail(event.target.value)
// }
// const handlepassword=(event)=>
// {
// setpassword(event.target.value)
// }
const handleincrement=()=>
{
setcount((prevCount)=>prevCount+1)
console.log(count)
}
 return (
  <div>
<form onSubmit={handlesubmit}>
<input type="text" name="email" placeholder="enter your email" onChange={handlechange}/>
<input type="password"  name="password" placeholder="type your password" onChange={handlechange}/>
<button type="submit" onClick={handlesubmit}>login</button>
</form> 
<p>{count}</p>
<button onClick={handleincrement}>increment</button>

    </div>
    
  )

}
export default App

