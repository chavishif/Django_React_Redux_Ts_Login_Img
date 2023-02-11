import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
loginAsync,

} from './loginSlice';
import styles from './Counter.module.css';

export function Login() {
  // const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
 
  return (
    <div>
    username: <input onChange={(e)=> setusername(e.target.value)}></input>
    password: <input onChange={(e)=> setpassword(e.target.value)}></input>
    <button onClick={()=> dispatch(loginAsync({username, password}))}>Login</button>

    </div>
  );
}
