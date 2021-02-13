import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Segment, Grid, Button, Header } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { signup } from '../actions/userActions'
import './Register.css';
import LoadingBox from '../LoadingBox';

import MessageBox from '../MessageBox';
import Axios from '../services/axios';
import instance from '../services/axios';

import './Register.css';
import Note from '../components/Note';

function Register(props) {

    
    const [ploading, setPloading] = useState(false);
    const [perror, setPerror] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('Male')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState()
    const [scope, setScope] = useState('Basic')


    const dispatch = useDispatch();
    

    const Submit = async (e) => {
        e.preventDefault();

        const sents = await instance.post("/user/signup", { firstName, lastName ,email ,userName ,phone, gender ,password, profileImage, scope });         
        console.log("here's sent",sents);
        setPloading(true);
        if (sents) {
            
        props.history.push('/emailsent')
        }

    };


    return (
        < div className='register'> 
            <h1 style={{textAlign:'center'}}>Internapp Africa partner Onboarding</h1>
            <Note />
            <br/>
                <Grid centered  columns={2} >
                    <Grid.Column width={13}>
                       <Segment>       
            
            {ploading ? (<LoadingBox />)
                : perror ? (<MessageBox>{perror}</MessageBox>)
                    : (
                            <Form  onSubmit={Submit}  >
                                
                                <Header as="h2" textAlign="center"> Create an Account </Header>
                                
                                    
                                <Form.Input
                                    label='First Name'
                                    placeholder='First Name...'
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
        
                                            
                                <Form.Input
                                    label='Last Name'
                                    placeholder='Last Name...'
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            
        
                                <Form.Input
                                    label='Email'
                                    placeholder='Please enter a valid email address'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
        
                                <Form.Input
                                    label='Username'
                                    placeholder='Username...'
                                    name='userName'
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
        
                                
                                <Form.Input
                                    label='Phone'
                                    placeholder='Phone...'
                                    name='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                
                                
                            
                                <div className="field">
                                    <label>Gender</label>
                                    <select onSelect={(e)=> setGender(e.target.value)} className="ui fluid dropdown">
                                       
                                        <option value="MA">Male</option>
                                        <option value="FE">Female</option>
                                    </select>
                                </div>
                                <Form.Input
                                    label='Password'
                                    placeholder='Password...'
                                    name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                
                                <Form.Input
                                    label='ProfileImage'
                                    type='file'
                                placeholder='ProfileImage...'
                                name='profileImage'
                                value={profileImage}
                                onChange={(e) => setProfileImage(e.target.files)}
                                
                                />
                                
                                
                                <div className="field">
                                    <label>Scope</label>
                                    <select onChange={(e)=> setScope(e.target.value)} className="ui fluid dropdown">
                                       <option value="MA">Basic</option>  
                                    </select>
                                </div>
                                        
                                                            
                                <Button type='submit' fluid compact style={{background : ploading ?' #ccc' : "black"}}  size="medium">
                                            Create an Account
                                </Button>
                                
                            </Form> 
                      
                                )}
                          </Segment>
                    </Grid.Column>
                </Grid>
           
            
        </div>
        
    )
    
}

export default Register