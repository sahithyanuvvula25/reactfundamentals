function Profile()
{const name = "sahithya"
  const age = 18

  const isstudent = true

    return( 
    
    <div>
        <p>my age is {age}</p>
      <p>name :{name}</p>
      <p>
        {isstudent===true ?" i am a student" :" i am not a student"}
        </p>
    
    </div>        
 )
}
export default Profile;
