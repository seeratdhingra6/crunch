import React, { useState, useEffect } from "react";
import { changeRBClass } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  changeRTClass,
  recordInput,
  finalInput,
  changeSearchClass,
  changeSpinnerClass,
  insertResp,
} from "../../Redux/actions";
import { accessUrl } from "../Api/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "../Api/Spotify";


const SearchBox = () => {

  const [ token, setToken ] = useState();

  console.log('this is token top',token)
  console.log('page started')
  //spotify api
  const s = new SpotifyWebApi({
    clientId : 'c08943a833db42649e6566c951f3f12b'
  });

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      setToken(_token)
      s.setAccessToken(_token);
    }

  }, [token]);
  
  //spinner Hook
  const [spinner, setSpinner] = useState("spinner__hide");
  const dispatch = useDispatch();
  
  //getting store
  const store = useSelector((store) => store);
  console.log('this is store',store)
  
  //For searching animation
  const preCall = (e) => {
    console.log('form submmited')
    // axios.get(accessUrl)
    e.preventDefault();
    // if(token){   api original code
    setSpinner("spinner__reset");
    dispatch(finalInput(store.inputValue.recordValue));
    dispatch(recordInput(""));
    dispatch(changeRBClass("search__after"));
    console.log('inside func token',token)
    // }
     
    //calling api

    // temp code *************
    callApi().then(resp =>{
       // showing data on screen
        dispatch(changeRTClass("search__after"));
        dispatch(changeSearchClass("search__after"));
        dispatch(changeSpinnerClass("search__before"));
        dispatch(insertResp(resp));

    })

    // temp code ends here**************
      // original code ****************************
      // if(token){
      //   console.log('if block working')
      //   axios.get('https://api.spotify.com/v1/search?q=edsheeren&type=playlist', {
      //       headers: {
      //         Authorization: 'Bearer ' + token //the token is a variable which holds the token
      //       }
      //      }).then((resp) => {
      //     console.log('this is response', resp.data)
      //   // showing data on screen
      //   dispatch(changeRTClass("search__after"));
      //   dispatch(changeSearchClass("search__after"));
      //   dispatch(changeSpinnerClass("search__before"));
      //   dispatch(insertResp(resp));
      // }).catch(error => console.log('this is error ',error));
      // };

      //ends here ************

    }

    useEffect(()=>{
     
    if(token){
      console.log('this precall function runs')
      preCall();
    }
  },[token])

  // calling api function
  // const callApi = async () => {
   
  // useEffect(() =>{
  //     if(token){
  //         axios.get('https://api.spotify.com/v1/search?q=edsheeren&type=artist', {
  //             headers: {
  //               Authorization: 'Bearer ' + token //the token is a variable which holds the token
  //             }
  //            }).then(resp => console.log(resp.data))
  //     }
  // },[token])
  // };

  // temp code
   const callApi = async () => {
        const resp = await fetch('https://api.github.com/users')
        const data = await resp.json()
        return data
      }

    // ends here

  // recording input statement
  const recordingInput = (event) => {
    dispatch(recordInput(event.target.value));
  };

  return (
    <div className="searchComp__container">
      <p className="searchComp__mainHeading">
        Discover playlists to pitch your music
      </p>
      <form className="searchComp__form" onSubmit={(e) => {preCall(e,token)}}>
        <input
          className="search__inputField"
          onChange={recordingInput}
          type="text"
          placeholder="Type any Music Genre, Similar Artist, Song Names or Hashtags" required
        />
        <div className="searchComp__selectBox">
          <select
            style={{
              width: "290px",
              height: "50px",
              backgroundColor: "transparent",
              padding: "10px 20px",
              border: "2px solid #E0187C",
              borderRadius: "10px",
              color: "white",
            }}
          >
            {/* searchComponent.css line 81 */}
            <option className="search__option" value="Any Playlist">
              Any Playlist
            </option>
            <option className="search__option" value="Social Handler">
              Social Handler
            </option>
            <option className="search__option" value="Email">
              Email
            </option>
            <option className="search__option" value="Instagram">
              Instagram
            </option>
            <option className="search__option" value="Twitter">
              Twitter
            </option>
            <option className="search__option" value="Similar Artist">
              Similar Artist
            </option>
            <option className="search__option" value="Similar Artist and email">
              Similar Artist and email
            </option>
          </select>
        </div>
        
        {/* <a href={accessUrl} className="searchComp__formBtn" type="submit">
          Go
        </a> */}
        <button className="searchComp__formBtn" type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchBox;
