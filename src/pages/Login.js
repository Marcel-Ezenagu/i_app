import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
    Header,
  Container,
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

   
       
              

    return (
        <div className='login'>
           
            
            <div>
                <h4 style={{textAlign:'center'}}>Login</h4>
            </div>
            <br />
            {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
              
            <div>
                <form onSubmit={loginHandler}>
                <div className='form-field'>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='Enter your email' value={email}  onChange={e => setEmail(e.target.value)}  required />

                </div>

                <div className='form-field'>
                    <label>Password</label>
                    <input password='password' type='text' placeholder='Enter your Password' value={password} onChange={e => setPassword(e.target.value)}  required />

                    </div>
                                   
                 <button
                    type='submit'
                    label='Send Message'
                    className='login-button'
                    disabled={loading}
                    >Login</button> 
                    
                    <div className='bottom' >
                                <br/>
                        <p>New to Internapp ? <Link to= '/signup' style={{color: "rgb(3, 105, 17)"}}>Create an Account</Link></p> 
                   
                    </div>

                </form>
            </div>
         </div>
    // <Container>
    //     <Grid centered columns={2} >
            
    //         <Grid.Column width={13}>
    //             <Header as="h2" textAlign="center">Login</Header>
               
    //             {loading && <LoadingBox />}
    //             {error && <MessageBox>{error}</MessageBox>}
              
    //             <Segment >

    //                 <Form  onSubmit={loginHandler} centered >
    //                     <Form.Input
    //                         fluid
    //                         icon="user"
    //                         iconPosition="left"
    //                         placeholder="Email address"
    //                         value={email}
    //                         onChange={(e) => setEmail(e.target.value)}
    //                         required
    //                     />
    //                     <Form.Input
    //                         fluid
    //                         icon="lock"
    //                         iconPosition="left"
    //                         placeholder="Password"
                            
    //                         value={password}
    //                         onChange={(e) => setPassword(e.target.value)}
    //                         required
    //                     />

    //                     <Button color="black"   type='submit' fluid size="large" disabled={loading}>Login</Button>
                    
    //                 </Form>
    //                 <br />
    //                <p>New to Internapp ? <Link to= '/signup'>Create an Account</Link></p> 
    //                      </Segment>
                   
                    
    //         </Grid.Column>
                
    //     </Grid>
    //  </Container>
    );

}
export default Login