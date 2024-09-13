import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import MyVerticallyCenteredModal from './UpdateTask';
import axios from 'axios';

// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const HireUsList = (props) => {
  const [Hireus, setHireus] = useState([]);
//   const [selectedEnquiry, setSelectedEnquiry] = useState({});
  const [updateUI, setUpdateUI] = useState(false);
const fetchHireus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/hireus");
        setHireus(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchHireus();
    }, []);
// const updateT = (task) => {
//   console.log("update Task");
//   setSelectedTask(task)
//   setModalShow(true)
// };

const exportToExcel = () => {
  const csvData = Hireus.map((Hireus) => {
    return [
      Hireus.hire_name,
      Hireus.hire_email,
      Hireus.hire_ph,
      Hireus.hire_design,
      Hireus.hire_company,
      Hireus.hiring_enquiry,
      // ApplyNow.a_marks

    ];
  });

  const csvContent = csvData.map((row) => row.join(",")).join("\n");
  const csvBlob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const csvFileName = "tasks.csv";
  
  const csvLink = document.createElement("a");
  csvLink.href = URL.createObjectURL(csvBlob);
  csvLink.setAttribute("download", csvFileName);
  document.body.appendChild(csvLink);
  csvLink.click();
  document.body.removeChild(csvLink);
};



const deleteHireus = (HireId) => {
  axios
    .delete(`http://localhost:5000/hireus/${HireId}`)
    .then((res) => {
      console.log("Task deleted successfully:", res.data);
      // Trigger UI update by changing the updateUI state in the parent component
      props.setUpdateUI((prevState) => !prevState);
    })
    .catch((error) => {
      console.error("Failed to delete task:", error);
    });
};

// const [modalShow,setModalShow] = useState(false)

  return (
    <>
<Button
  // variant="success"
  onClick={exportToExcel}
  style={{ margin: "30px auto 20px", display: "block" ,position:'relative',left:'27rem',top:'3rem',background:'#408687',color:"black",fontSize:'1rem',fontWeight:'600'}}
>
  Export to Excel
</Button>
      <Table  style={{marginTop:'8rem',width:'70rem',position:'relative',right:'3rem'}}>
        <thead>
          <tr className="">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone_No:</th>
            <th>Designation</th>
            <th>Company Name</th> 
            {/* <th>Hiring Enquiry</th>  */}
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {Hireus &&
            Hireus.map((Hireus, index) => {
              return (
                <tr className="text-center11" key={index}>
                  <td>{index + 1}</td>
                  <td>{Hireus.hire_name}</td>
                  <td>{Hireus.hire_email}</td>
                  <td>{Hireus.hire_ph}</td>
                  <td>{Hireus.hire_design}</td>
                  {/* <td>{Hireus.hire_company}</td> */}
                  <td>{Hireus.hiring_enquiry}</td>
                 
                  <td>
                    {/* <Button
                      variant="primary"
                      className="my-3"
                      onClick={() => updateTask(enquiry)}style={{background:'white'}}
                    >
                      
                      <EditIcon style={{color:'#78104a'}} />
                    </Button> */}
                    <Button style={{backgroundColor: "#408687",color:'white'}}  variant="primary" onClick={() => deleteHireus(Hireus.hire_id)}>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      {/* <Modal show={selectedTaskToDelete !== null} onHide={() => setSelectedTaskToDelete(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the Course?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedTaskToDelete(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setSelectedTask({}); // Reset the selected task when modal is closed
        }}
        selectedTask={selectedTask}
        setUpdateUI={setUpdateUI} // Pass the setUpdateUI function to the modal
      /> */}
    </>
  );
};

export default HireUsList;