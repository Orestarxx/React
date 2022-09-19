 function ShowDetails(props){
    let{userDetails,showPosts1} = props;


    return(<div className='userDetails'>
        <div><b>{userDetails?.id}</b></div>
        <div><b id='address'>Address</b></div>
        <div><b>Street:</b>{userDetails?.address?.street}</div>
        <div><b>City:</b>{userDetails?.address?.city}</div>
        <div><b>Suite:</b>{userDetails?.address?.suite}</div>
        <div><b>Zipcode:</b>{userDetails?.address?.zipcode} </div>
        <button className='usersButton' onClick={()=>{
           showPosts1(userDetails.id)
        }}>Posts</button>
    </div>)
 }
 export default ShowDetails;