import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountMenu from './component/AccountMenu';
import BasicForm from './component/BasicForm';
import ToDoTable from './component/ToDoTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const [formData, setFormData] = React.useState([]);

	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};

	const handleDelete = (index) =>{
		console.log('delete');
		const formDataCopy = [...formData]; //copy of data from formData
		formDataCopy.splice(index, 1); //removing item depending on where in the list
		setFormData(formDataCopy);

	}

	const handleSubmit = (values) => {
		console.log('added');
		setFormData([...formData, values]);
	}
  return (
	<Router>
		<Routes>
			<Route
				path="/"
				element={
					<Container maxWidth="sm">
						<AccountMenu onClick={handleOnClick} />
						{openForm && <BasicForm onSubmit={handleSubmit} />}
						<br></br><br></br>
						{formData.length > 0 && (
							<ToDoTable data={formData} onDelete={handleDelete}/>
						)}
						</Container>
				}
			/>

		</Routes>
	</Router>
  );
}

