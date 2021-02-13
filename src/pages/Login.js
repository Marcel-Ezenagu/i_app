import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { login} from '../actions/userActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

import './Login.css';




function Login(props) {
    
    
   // const [ploading, setPLoading] = useState(false);
    // const [perror, setPerror] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;



    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        setEmail('');
        setPassword('')
 
        }

    useEffect(() => {
        if (userInfo) {
            //console.log(userInfo.user.firstName);
        props.history.push('/dashboard');     
            } 
        }, [userInfo])
    
       
              

return (
    
     <div>
         <Grid centered columns={2} >
            <Grid.Column width={13}>
                <Header as="h2" textAlign="center">Login</Header>
               
                {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
              
                <Segment >

                    <Form  onSubmit={loginHandler} centered >
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <Button color="black"   type='submit' fluid size="large" disabled={loading}>Login</Button>
                    
                    </Form>
                    <br />
                   <p>New to Internapp ? <Link to= '/signup'>Create an Account</Link></p> 
                         </Segment>
                   
                    
            </Grid.Column>
                
        </Grid>
        <hr />
        <br/>
        <div width={13}>
             <h3>How to reach us:</h3>
            <p>
            Mobile {' '} +234 810 776 6889<br/>
            Email - <Link>info@internapp.co</Link>
            </p>

        </div>
    </div>
    );

}
export default Login