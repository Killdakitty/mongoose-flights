const React= require('react');
function Index(props){
    const {flights}=props
return(
<main>
<nav>
    <a href='/flights/new'>Create a new Flight</a>
</nav>

<h1> Index page for FLIGHTS! </h1>
<ul>{
    flights.map((flight,i)=>{
        return(
            <li>
                <a href={`/flights/${flights._id}`}>{flight.airline}</a>
                has a flight number of {flight.flightNo} 
                <br/>
                departing
                {flight.departs}
                <br/>
            </li>
        )
    })

}</ul>






</main>
)
}
module.exports=Index