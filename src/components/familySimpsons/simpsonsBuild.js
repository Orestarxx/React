export default  function Simpson(props){
  let {item:simpson} = props;
    return(
      <div className="father">
  <h3>{simpson.id}-{simpson.nameSur}</h3>
      <p>{simpson.description}</p>
        <img src={simpson.image} alt="Simpsons"/>

      </div>
    )
}
