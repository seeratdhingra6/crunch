import React, {useEffect, useState} from 'react'
import Dashboard from './Dashboard'
import LoginApi from './LoginApi'
import { getTokenFromResponse } from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import SearchBox from '../searchPage/SearchBox';
import { useHistory } from 'react-router-dom';

// const code = new URLSearchParams(window.location.search).get('code')
// console.log('this is code', code)

const s = new SpotifyWebApi();

const ApiApp = () => {

  const [ token, setToken ] = useState();
  const history = useHistory()

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

  return  <SearchBox token={token} /> 
}

export default ApiApp
