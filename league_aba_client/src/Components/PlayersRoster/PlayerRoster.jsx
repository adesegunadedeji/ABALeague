import React, {Component} from 'react'
class PlayerRoster extends Component{
    constructor(){
        super()
        this.state= {
             player: [],
            }
    }
    componentDidMount(){
        console.log("Component did Mount");
        this.getPlayer();
        // this.getPlayers();
    }

    getPlayer = async()=>{
        try{ 
        const player  = await fetch("http://localhost:3001/leagues");
        const parsedResponse = await player.json();
        console.log(parsedResponse)
        this.setState({
            player: parsedResponse
        })
    }
    catch(err){
        console.log(err)
    }
    }

    createPlayer = async(formData)=>{
        console.log("Player Created");
    try{
        const newPlayer = await fetch(`http://localhost:3001/leagues`,{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
             }
        })
        const parsedResponse = await newPlayer.json();
        if(parsedResponse.status.code === 201){
            this.setState({
                player: [parsedResponse.data,...this.state.player]
            })
        }
    }
    catch(err){
        console.log(err)
    }
    }

    updatePlayer = async(id,formData)=>{
    try{
        const updatedPlayer = await fetch(`http://localhost:3001/leagues/:id`,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(formData),
            headers:{
                 "Content-Type": "application/json"
            }
            })
            const parsedResponse = await updatedPlayer.json();
            console.log(parsedResponse)
            if(parsedResponse.status.code === 201){
                console.log("Player Profile Updated", formData)
                this.setState({
                    player: this.state.player.map(player=>player._id === id? parsedResponse.data : player)//Search through If the ID Matches then Match
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }
    
    destroyPlayer = async(id)=>{
        try{
        const deletedPlayer = await fetch(`http://localhost:3001/leagues/:id`,{
            method: "DELETE",
            credentials: "include"
    })
    const parsedResponse = await deletedPlayer.json();
    if(parsedResponse.status.code === 200){
        this.setState({
            player: this.state.player.filter(player=>player._id !== id)
        })
    }

}
catch(err){
    console.log(err)

}
}
    // getPlayers = async()=>{
    //     const player = await fetch("http://data.nba.net/10s/prod/v1/2019/players.json");
    //     const playerParsedResponse= await player.json();
    //     console.log(playerParsedResponse)
    //     this.setState({
    //         player: playerParsedResponse
    //     })
    // }


    render (){
        const player = this.state.player.map((playerProfile)=>{
            return <div key = {playerProfile.id}>
                    <p>{playerProfile.player}</p>   
            </div>
        })
        return (
            <div className = "playerRoster">
                <h1>Player Roster</h1>
                {player}
            </div>
        )
    }
}
export default PlayerRoster