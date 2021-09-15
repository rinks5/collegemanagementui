import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
  { field: 'id', headerName: 'ID', width: 90, editable: true },
  { field: 'user', headerName: 'Student ID', width: 90, editable: true },
  {
    field: 'userName',
    headerName: 'Student name',
    width: 150,
    editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 150,
    editable: true,
  },
  {
    field: 'perTen',
    headerName: '10 Percentage',
    type: 'number',
    width: 250,
    editable: true,
  },
  {
    field: 'perTwelve',
    headerName: '12 Percentage',
    type: 'number',
    width: 250,
    editable: true,
  }, {
    field: 'jeeMarks',
    headerName: 'JEE Marks',
    type: 'number',
    width: 250,
    editable: true,
  },
  {
    field: 'appStatus',
    headerName: 'Status',
    width: 150,
    editable: true
  },
  {
    field: 'appComment',
    headerName: 'Comment',
    width: 575,
    editable: true,
  }

];

const baseURL = "/getAllDetails";



export const AdminScreen = () => {

  const [rows, setRows] = React.useState([])

  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  const submit = (e) => {
    e.preventDefault();

    let id = Object.values(editRowsModel)[0].id.value


    let student = {
      "id": editRowsModel[id].id.value,
      "user": editRowsModel[id].user.value,
      "course": editRowsModel[id].course.value,
      "perTen": editRowsModel[id].perTen.value,
      "perTwelve": editRowsModel[id].perTwelve.value,
      "jeeMarks": editRowsModel[id].jeeMarks.value,
      "appStatus": editRowsModel[id].appStatus.value,
      "appComment": editRowsModel[id].appComment.value,
      "userName": editRowsModel[id].userName.value
  }


  axios
  .put("/updateInfo", student)
  .then((response) => {
  });
    
  }

  React.useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setRows(res.data)
      });
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        editRowsModel={editRowsModel}
        editMode="row"
        onEditRowsModelChange={handleEditRowsModelChange}
      />

      <br/>
      <button
        className="btn btn-primary"
        onClick={submit}
      >
        Save
      </button> 
    </div>
  )
}
