import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import MyVerticallyCenteredModal from './UpdateTask';
import axios from 'axios';

// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EnquiryList = (props) => {
  const [enquiry, setEnquiry] = useState([]);
//   const [selectedEnquiry, setSelectedEnquiry] = useState({});
  const [updateUI, setUpdateUI] = useState(false);
const fetchEnquiry = async () => {
      try {
        const response = await axios.get("http://localhost:5000/enquriy");
        setEnquiry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchEnquiry();
    }, []);
// const updateT = (task) => {
//   console.log("update Task");
//   setSelectedTask(task)
//   setModalShow(true)
// };
const exportToExcel = () => {
  const csvData = enquiry.map((enquiry) => {
    return [
      enquiry.enq_name,
      enquiry.enq_name,
      enquiry.enq_mobile,
      enquiry.enq_mobile,
      enquiry.area_interest
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

const deleteEnquiry = (taskId) => {
  axios
    .delete(`http://localhost:5000/enquriy/${taskId}`)
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
            {/* */}
            <th>Area Of Interest</th>
            {/* <th>message</th>  */}
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {enquiry &&
            enquiry.map((enquiry, index) => {
              return (
                <tr className="text-center11" key={index}>
                  <td>{index + 1}</td>
                  <td>{enquiry.enq_name}</td>
                  <td>{enquiry.enq_email}</td>
                  <td>{enquiry.enq_mobile}</td>
                  <td>{enquiry.area_interest}</td>
                  {/* <td>{enquiry.enq_message}</td> */}
                 
                  <td>
                    {/* <Button
                      variant="primary"
                      className="my-3"
                      onClick={() => updateTask(enquiry)}style={{background:'white'}}
                    >
                      
                      <EditIcon style={{color:'#78104a'}} />
                    </Button> */}
                    <Button style={{backgroundColor: "#408687",color:'white'}}  variant="primary" onClick={() => deleteEnquiry(enquiry.enq_id)}>
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

export default EnquiryList;