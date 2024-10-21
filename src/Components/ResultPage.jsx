import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';

const ResultPage = () => {
  const location = useLocation();
  const formData = location.state || {}; 

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{fontWeight:"bold"}}>
        Submitted Form Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>First Name: {formData.firstName}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Last Name: {formData.lastName}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Email: {formData.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Phone: {formData.phone}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Address: {formData.addressLine}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Country: {formData.country}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Date of Birth: {formData.DOB}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultPage;
