import { APICONFIG } from '../modules/helper';
import * as moment from 'moment';
import Store from '../../store';

import AsyncSessionStorage from '../components/shared/asyncStorage';

export function hasToken(info, apiBaseUrl = APICONFIG.apiBaseUrl) {

    return dispatch => {
      if(info) {
        let userData = JSON.parse(info);
        // console.log(userData)
        let now = moment();
        let expiry = moment(userData.expiryTime.toString());
       
        let difference = expiry.diff(now);
        if( difference > 0) {
            let loggedIn = userData;
            loggedIn.autologin = true;
            // dispatch({
            //   type: 'HAS_TOKEN',
            //   payload: loggedIn
            // })
            AsyncSessionStorage.retrieveItem('CancelUserRoleCheck').then(async (data) => {
                if(data) {
                    await AsyncSessionStorage.purgeItem('CancelUserRoleCheck')
                    dispatch({
                        type: 'HAS_TOKEN',
                        payload: loggedIn
                    })
                } else {
                    fetch(`${apiBaseUrl}/api/userpreferences/getuserrole?userName=${loggedIn.username}`,{
                        method: 'GET',
                        headers: {
                            'Authorization' : `${loggedIn.token_type} ${ loggedIn.token}`,
                            'Accept': 'application/json',
                        }
                    }).then(async (response) => {
                        if(response.status === 200 && response.ok) {
                            return await response.json()
                        } else {
                            let res = await response.json()
                            throw `${response.status} : ${res.Message} - User role check failed`
                        }
                    }).then((result) => {
                        loggedIn.userRole = result
                        dispatch({
                            type: 'HAS_TOKEN',
                            payload: loggedIn
                        })
                    }).catch((err) => {
                        console.log(err)
                        // let data = {
                        //   username: loggedIn.username,
                        //   action: 'Get User Role',
                        //   url: `${apiBaseUrl}/api/userpreferences/getuserrole?userName=${loggedIn.username}`
                        // };
                        // dispatch({
                        //   type: 'REQUEST_ERROR',
                        //   payload: err.toString(),
                        //   data: data
                        // })
                    })
                }
            })
          
        } else {
            let loggedIn = userData;
            loggedIn.autologin = false;
            dispatch({
              type: 'HAS_TOKEN',
              payload: loggedIn
            })
        //   let data = {
        //     username: userData.username,
        //     action: 'Auto Login',
        //     url: 'NA'
        //   };
        //   let err = 'Session Expired : Token has been expired';
        //   dispatch({
        //     type: 'REQUEST_ERROR',
        //     payload: err.toString(),
        //     data: data
        //   })
        }
      } else {
        let loggedIn = Store.getState().settings.userData;
        loggedIn.autologin = false;
        dispatch({
          type: 'HAS_TOKEN',
          payload: loggedIn
        })
        // let data = {
        //   username: 'test@crowdsense.ai',
        //   action: 'Auto Login'
        // };
        // let err = 'User Not Found : No logged in user has been found';
        // dispatch({
        //   type: 'REQUEST_ERROR',
        //   payload: err.toString(),
        //   data: data
        // })
      }
      
    }
}

export function loginUser(data, apiBaseUrl = APICONFIG.apiBaseUrl) {

    return dispatch => {
      const searchParams = (params) => Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
      
      data.url = `${apiBaseUrl}/token`
      fetch(`${apiBaseUrl}/token`, {
        method: 'POST',
        body: searchParams({ username: data.username, password: data.password, grant_type: 'password' }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        
      })
      .then(async (response) => { 
        try{
          let loggedIn;
          let status;
          const result = await response.json();
          // if(response.status === 200 && response.ok) {
            
            if(result.access_token && result.token_type) {
  
              loggedIn = {'token': result.access_token, 'isLoggedIn' : true, "token_type" : result.token_type, "username" : result.userName, "loginTime" : result['.issued'], "expiryTime" : result['.expires'], "expiresIn" : result.expires_in,  "TNC" : false, userRole: '', autologin: false }
              // console.log(result.userName)
              status = true
              data.url = `${apiBaseUrl}/api/userpreferences/getuserrole?userName=${loggedIn.userName}`;
              const roleResponse = await fetch(`${apiBaseUrl}/api/userpreferences/getuserrole?userName=${loggedIn.username}`,{
                method: 'GET',
                headers: {
                  'Authorization' : `${result.token_type} ${ result.access_token}`,
                  'Accept': 'application/json',
                }
              });
              if(roleResponse.status === 200 && roleResponse.ok) {
                const Role = await roleResponse.json();
                loggedIn.userRole = Role;
              } else {
                throw `${roleResponse.status} : ${roleResponse.statusText} - User role check failed`
              }
  
              data.url = `${apiBaseUrl}/api/termsandconditions/checkuser?userName=${result.userName}`
              const tncResponse = await fetch(`${apiBaseUrl}/api/termsandconditions/checkuser?userName=${result.userName}`, {
                method: 'GET',
                headers: {
                  'Authorization' : `${result.token_type} ${ result.access_token}`,
                  'Accept': 'application/json',
                }
              });
              if(tncResponse.status === 200 && tncResponse.ok) {
                const tnc = await tncResponse.json();
                loggedIn.TNC = tnc || false;
              } else {
                throw `${tncResponse.status} : ${tncResponse.statusText} - Terms and conditions check failed`;
              }
  
            //   window.localStorage.setItem('userData',JSON.stringify(loggedIn));
              await AsyncSessionStorage.storeItem({ key: 'userData', value: JSON.stringify(loggedIn) })

              dispatch({
                type: 'LOGIN_USER',
                payload: loggedIn,
                status: status
              })
            } else if(result.error && result.error_description) {
              throw `${result.error} : ${result.error_description}`;
              
            } else {
              throw `${response.status} : ${response.statusText} - Invalid Error`
            }
          // } else {
          //   throw `${response.status} : ${response.statusText} - Login Request Failed`
          // }
          
        } catch(err) {
          console.log(err)
          data.action = 'Try to login';
          throw err;
        }
      })
      .catch((err) => {
        console.log(err)
        // dispatch({
        //   type: 'REQUEST_ERROR',
        //   payload: err.toString(),
        //   data: data
        // })
      })
    }
}