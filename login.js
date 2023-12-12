import React from 'react'
import { Grid,Paper,Avatar,TextField,Button,Link,Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  { useState } from "react";
import { useEffect } from "react";


const Login=() => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errPass, setErrPass] = React.useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (password === null || password === undefined || password === "") {
      setErrPass("Password is required");
    } else {
      setErrPass("");
    }
  },[password])

  function register() {
    console.log(`Need to call backend API to register with values ${username} and ${password}`);
  }

    const paperStyle={padding: 20,height: '70vh',width: 280,margin:"20px auto"}
    const avatarStyle={backgroundColor: "green"}
    const btnstyle={Margin:'8px 0'}
    //const passwordstyle={Margin: '0 0 10px 10px'}
    return(
        <Grid align='center' item xs={12} sm={12} md={12} lg={12} xl={12} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
            <Paper elevation={10} columnspacing={{ xs: 1, sm: 2, md: 3 }} style={paperStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username'  onChange={handleUsernameChange}  fullWidth  required></TextField>
                <TextField  label='Password' placeholder='Enter Password' type='password' onChange={handlePasswordChange}  fullWidth required helperText={errPass}></TextField>
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
                <Button type='submit' color='primary' variant="contained"  onClick={register} style={btnstyle} fullWidth> Sign In</Button>
                <Typography>
                <Link href="#" fullWidth>Forgot Password</Link>
                </Typography>
                <Typography>
                    Do You have an account?
                    <Link href="#" fullWidth>Sign Up</Link>


                </Typography>
            

            </Paper>
        </Grid>
    )
}
export default Login