import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button, FormControl, TextField, Typography } from '@mui/material';

const BasicForm = ({onSubmit}) => (
  <div>
    <Typography variant='h2' style={{textAlign: 'center'}}> To Do:</Typography>
    <Formik
      initialValues={{
        todo: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      
    >
      {({values, handleChange}) => (
        <Form>
            <FormControl fullWidth>
              <Field
                as={TextField}
                id="todo"
                name="todo"
                type="text"
                value={values.todo}
                onChange={handleChange}
                placeholder="Add item to your list here"
              />
            </FormControl>
            <br></br><br></br>
            <FormControl fullWidth>
              <Button
                id="todo"
                type="submit"
                variant="contained"
                color="success"
                disabled={!values.todo}
              >
                Submit
              </Button>
            </FormControl>
        </Form>
      )}
    </Formik>
  </div>
);

export default BasicForm
