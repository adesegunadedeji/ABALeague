import React, {Component} from 'react'
class PlayerRoster extends Component{
    constructor(){
        super()
        this.state= {
             league: []
            }
    }
    componentDidMount(){
        console.log("Component did Mount");
        this.getLeague();
    }


   
    getLeague = async()=>{
        const league  = await fetch("http://localhost:3001/leagues");
        const parsedResponse = await league.json();
        console.log(parsedResponse)
        this.setState({
            league: parsedResponse
        })
    }
    render (){
        const league = this.state.league.map((liga)=>{
            return <div key = {liga.id}>
                    <p>{liga.player}</p>   
            </div>
        })
        return (
            <div className = "playerRoster">
                <h1>Player Roster</h1>
                {league}
            </div>
        )
    }
}
export default PlayerRoster