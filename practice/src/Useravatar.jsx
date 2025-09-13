function Useravatar() {

    const imgborder={
        border:'1px solid',
        borderRadius:'10px'
        
    }
    return (
        <div style={imgborder}>
            <img src="girlphoto.jpg" alt="" />
            <h2>N.SAHITHYA</h2>
            <p>course:B.Tech(CSE)</p>
            <p>rollNo:24VV1A0544</p>
            <p>Blood Group:O-ve</p>
            <p>DOB:25/09/2007</p>
        </div>
    )
}
export default Useravatar;