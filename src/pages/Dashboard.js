import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Segment, Grid,  Button,  Header } from 'semantic-ui-react';
import { companyCreate } from '../actions/companyActions';
import { userUpdate } from '../actions/userActions';
import Note from '../components/Note';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';


function Dashboard(props) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedIn, setLinkedIn] = useState('')
  const [twitter, setTwitter] = useState('')
 
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyData, setCompanyData] = useState('');
  const [location, setLocation] = useState('');
  const [titleOfIntern, setTitleOfIntern] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [termsOfEngagement, setTermsOfEngagement] = useState('');
  const [stipend, setStipend] = useState('');
  const [participatoryMode, setParticipatoryMode] = useState('Remote');
  
const company = useSelector(state => state.company);
const {loading, error, companyInfo } = company
  const dispatch = useDispatch();

  const updateUser = (e) => {
    e.preventDefault();
    dispatch(userUpdate());
  }

  const companyCreateHandler = (e) => {
    e.preventDefault();

    dispatch(companyCreate(facebook,
      twitter,
      linkedIn,
      name,
      industry,
      companyData,
      location,
      titleOfIntern,
      fieldOfStudy,
      responsibilities,
      termsOfEngagement,
      stipend,
      participatoryMode));
  };


  useEffect(() => {
    if (companyInfo) {
      
      props.history.push('/internships');
    }
  },[companyInfo])


  
  

    return (
      <>
        <div>
{/*               <Segment>
                <Form onSubmit={updateUser}>
                  <Header as="h4" textAlign="left">
                    {" "}
                    User Profile{" "}
                  </Header>

                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      label="First name"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Field
                      id="form-input-control-middle-name"
                      control={Input}
                      label="Middle name"
                      placeholder="Middle name"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />

                    <Form.Field
                      id="form-input-control-user-name"
                      control={Input}
                      label="Last name"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Field
                    id="form-input-control-user-name"
                    control={Input}
                    label="UserName"
                    placeholder="UserName"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />

                  <Form.Field
                    id="form-input-control-error-email"
                    control={Input}
                    label="Email"
                    placeholder="Please enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Form.Field
                    id="form-input-control-phone-number"
                    control={Input}
                    label="Phone Number"
                    placeholder="Please enter a valid phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <Form.Field color='black' disabled={loading} control={Button} content="Update Profile" />
                </Form>
              </Segment>
 */}
              
              <form>
                     
                {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
              
                <div className='form-field'>
                    <label>Facebook Profile URL</label>
                    <input name='facebook' type='url' placeholder='Enter your facebook profile URL' value={facebook}  onChange={e => setFacebook(e.target.value)}  required />
                </div>
                  
                <div className='form-field'>
                    <label>Twitter Profile URL</label>
                    <input name='twitter' type='url' placeholder='Enter your twitter profile URL' value={twitter}  onChange={e => setTwitter(e.target.value)}  required />
                </div>

                <div className='form-field'>
                    <label>LinkedIn Profile URL</label>
                    <input name='linkedIn' type='url' placeholder='Enter your linkedIn profile URL' value={linkedIn}  onChange={e => setLinkedIn(e.target.value)}  required />
                </div>

                  
                <div className='form-field'>
                    <label>Company Name</label>
                    <input name='companyData' type='text' placeholder="Enter your Company's name" value={companyData}  onChange={e => setCompanyData(e.target.value)}  required />
                </div>

    
                <div className='form-field'>
                    <label>Industry</label>
                    <input name='industry'
                      type='text'
                      placeholder="Enter your industry of operation"
                      value={setIndustry}
                      onChange={e => setIndustry(e.target.value)}
                      required />
                </div>
                  
                  <div className="form-field">
                    <label>Company Description</label>
                    <textarea
                      placeholder="Enter a brief description of your company"
                      value={companyData}
                      onChange={(e) => setCompanyData(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  
                  
                  <div className='form-field'>
                    <label>Location</label>
                    <input name='location'
                      type='text'
                      placeholder="Enter your location of operation"
                      value={Location}
                      onChange={e => setLocation(e.target.value)}
                      required />
                </div>

                  
                  <div className='form-field'>
                    <label>Title for Intern</label>
                    <input name='Title for Intern'
                      type='text'
                      placeholder="Enter your Title for the position"
                      value={titleOfIntern}
                      onChange={e => setTitleOfIntern(e.target.value)}
                      required />
                  </div>



                  <div className='form-field'>
                    <label>Field of Study</label>
                    <input name='field'
                      type='text'
                      placeholder="Enter required field of study"
                      value={fieldOfStudy}
                      onChange={e => setFieldOfStudy(e.target.value)}
                      required />
                </div>

                  <div className="form-field">
                    <label>Responsibilities</label>
                    <textarea
                      value={responsibilities}
                      onChange={(e) => setResponsibilities(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  
                  <div className='form-field'>
                    <label>Terms of Engagement</label>
                    <input name='termsOfEngagement'
                      type='text'
                      placeholder="E.g:  3 - 12 months"
                      value={termsOfEngagement}
                      onChange={e => setTermsOfEngagement(e.target.value)}
                      required />
                </div>

                  <div className='form-field'>
                    <label>Stipend (In USD)</label>
                    <input name='stipend'
                      type='number'
                      placeholder="Enter the Stipend (In USD)"
                      value={stipend}
                      onChange={e => setStipend(e.target.value)}
                      required />
                  </div>

                  

                  <div className="form-field">
                    <label>Participatory Mode</label>
                    <select
                      className="ui fluid dropdown"
                      onChange={(e) => setParticipatoryMode(e.target.value)}
                    >
                      <option value={participatoryMode}>Remote</option>
                      <option value={participatoryMode}>On-site</option>

                      <option value={participatoryMode}>Remote and On-site</option>
                    </select>
                  </div>

                  
                <button
                    type='submit'
                    label='Send Message'
                    
                    className='signup-button'
                    >Post</button>              
                    
              </form>
                
        </div>
      </>
    );
}

export default Dashboard
