import axios from 'axios';
import React, {useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';

const Dashboard = ({token}) => {

    const s = new SpotifyWebApi({
        clientId : 'c08943a833db42649e6566c951f3f12b'
    });

    useEffect(() =>{
        if(token){
            axios.get('https://api.spotify.com/v1/search?q=edsheeren&type=artist', {
                headers: {
                  Authorization: 'Bearer ' + token //the token is a variable which holds the token
                }
               }).then(resp => console.log(resp.data))
        }
    },[token])
    
        // s.setAccessToken(token)
    //     axios.post("https://api.spotify.com/v1/search",{
    //         q : "ed sheeran",
    //         type: "artist",
    //         Accept : "application/json",
    //         ContentType : "application/json",
    //         Authorization: `Bearer${token}`
    // })
  
    
   
    return (
        <div>
            
        </div>
    )
}

export default Dashboard
