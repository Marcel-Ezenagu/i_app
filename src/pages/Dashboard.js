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
        <Header as="h1" textAlign="center">
          {" "}
          Dashboard{" "}
        </Header>
        <div>
          <Grid centered column={2}>
            <Grid.Column>
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
              
              
              <Note/>
              <Segment>
                
              <Form centered onSubmit={companyCreateHandler} size="large">
                

                  <Header as="h3" textAlign="left">
                    {" "}
                    Company Profile{" "}
                  </Header>
                     
                {loading && <LoadingBox />}
                {error && <MessageBox>{error}</MessageBox>}
              
                  <Form.Field
                    id="form-input-control-facebook"
                    control={Input}
                    label="Facebook Profile URL"
                    placeholder="Please enter a your Facebook Profile URL"
                    
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />

                  <Form.Field
                    id="form-input-control-twitter"
                    control={Input}
                    label="Twitter Profile URL"
                    placeholder="Please enter a your twitter Profile URL"
                  
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />

                  <Form.Field
                    id="form-input-control-linkedIn"
                    control={Input}
                    label="LinkedIn Profile URL"
                    placeholder="Please enter a your linkedIn Profile URL"
                    
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />

                  <Form.Input
                    label="Name"
                    placeholder="Enter your Company's Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <Form.Input
                    label="Industry"
                    placeholder="Enter your industry of operation"
                    name="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />

                  
                  <div className="field">
                    <label>Company Description</label>
                    <textarea
                      value={companyData}
                      onChange={(e) => setCompanyData(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  
                  <Form.Input
                    label="Location"
                    placeholder="Enter your company's location"
                    name="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />

                  <Form.Input
                    label="Title for Intern"
                    placeholder="Enter the Title for the position"
                    name="Title"
                    value={titleOfIntern}
                    onChange={(e) => setTitleOfIntern(e.target.value)}
                    required
                  />


                  <Form.Input
                    label="Field of Study"
                    placeholder="Enter the field of study."
                    name="field"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    required
                  />

                  <div className="field">
                    <label>Responsibilities</label>
                    <textarea
                      value={responsibilities}
                      onChange={(e) => setResponsibilities(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <Form.Input
                    label="Terms of Engagement"
                    placeholder="E.g:  3 - 12 months"
                    name="Terms"
                    value={termsOfEngagement}
                    onChange={(e) => setTermsOfEngagement(e.target.value)}
                    required
                  />

                  <Form.Input
                    label="Stipend (In USD)"
                    placeholder="Enter the Stipend (In USD)"
                    name="stipend"
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    required
                  />

                  <div className="field">
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

                  <Form.Field
                    id="form-button-control-public"
                    control={Button}
                    content="Post Position"
                    color="black"
                    centered
                    disabled={loading}
                  />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </>
    );
}

export default Dashboard
