import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from './FormsUI/Textfield';
import Select from './FormsUI/Select';
import DateTimePicker from './FormsUI/DataTimePicker';
import Button from './FormsUI/Button';
import countries from '../data/countries.json';
import { useNavigate } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine: '',
  country: '',
  DOB: '',
  password: '',
  confirmPassword: ''
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.string()
    .required('Required')
    .length(10, 'Phone number must be exactly 10 digits')
    .matches(/^[0-9]+$/, 'Phone number must contain only digits'),
  addressLine: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  DOB: Yup.date().required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const FormPage = () => {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    image: {
      width: '400px',
      height:"200px" 
    },
  };

  return (
    <>
    <div style={styles.container}>
     <img src={"img3.jpeg"} alt="Logo" style={styles.image} />
    </div>
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div style={{ marginTop: '70px', marginBottom: '30px' }}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                navigate('/result', { state: { ...values } });
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="password" label="Password" type="password" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="confirmPassword" label="Confirm Password" type="password" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="DOB" label="DOB" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine" label="Address Line" />
                  </Grid>
                  <Grid item xs={12}>
                    <Select name="country" label="Country" options={countries} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button style={{ fontWeight: 'bold' }}>Submit Form</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
    </>
  );
};

export default FormPage;
