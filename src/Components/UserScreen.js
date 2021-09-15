import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
  { field: 'user', headerName: 'Student ID', width: 90 },
  {
    field: 'userName',
    headerName: 'Student name',
    width: 150,
    editable: false,
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
    editable: false
  },
  {
    field: 'appComment',
    headerName: 'Comment',
    width: 575,
    editable: false,
  }

];



let userData;

export const UserScreen = () => {


  const [editRowsModel, setEditRowsModel] = React.useState({});

  const [rows, setRows] = React.useState([])

  const [edit, setEdit] = React.useState("false")


  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  const baseURL = "/updateInfo"

  const submit = (e) => {
    e.preventDefault();
  
    let course
    if (editRowsModel[userData[0].id].course.value)
      course = editRowsModel[userData[0].id].course.value
    else
      course = userData[0].course

    let perTen
    if (editRowsModel[userData[0].id].perTen.value)
      perTen = editRowsModel[userData[0].id].perTen.value
    else
      perTen = userData[0].perTen

    let perTwelve
    if (editRowsModel[userData[0].id].perTwelve.value)
      perTwelve = editRowsModel[userData[0].id].perTwelve.value
    else
      perTwelve = userData[0].perTwelve

    let jeeMarks
    if (editRowsModel[userData[0].id].jeeMarks.value)
      jeeMarks = editRowsModel[userData[0].id].jeeMarks.value
    else
      jeeMarks = userData[0].jeeMarks




    let student = {
      "id": userData[0].id,
      "user": userData[0].user,
      "course": course,
      "perTen": perTen,
      "perTwelve": perTwelve,
      "jeeMarks": jeeMarks,
      "appStatus": userData[0].appStatus,
      "appComment": userData[0].appComment,
      "userName": userData[0].userName
    }


    axios
      .put(baseURL, student)
      .then((response) => {
      });
  }

  

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))

    axios.get('/getStudentDetail?id=' + user.id)
  .then(res => {
    setRows(res.data);
    userData = res.data;
    if(res.data[0].appStatus === "SUBMITED"){
      setEdit("true")
    }
  })
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
      <br />
      {
        edit === "true" ?
      <button
        className="btn btn-primary"
        onClick={submit}
      >
        Save
      </button> : ""
      }
    </div>
  )
}
