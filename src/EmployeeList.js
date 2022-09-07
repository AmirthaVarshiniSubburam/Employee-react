import React, { useState } from 'react'
import axios from 'axios';
import DisplayEmployee from './DisplayEmployee';

function EmployeeList() {
  //to input url

  const api = axios.create({
    baseURL: `http://localhost:3000/employees`
  })


let getAllDetails = () => {
    api.get(`/`)
    .then(res=>{
        setEmployees(res.data)
    })
}

let submit = () => {
    let newEmployee = {
        "id":empId,
        "empName":empName,
        "salary":salary
    }

    api.post(`/`,newEmployee)
    .then(res=>(res.data))
    .catch(err=>console.log(err))
    getAllDetails()
}

    let [employees,setEmployees] = useState([])
    let[empId, setId] = useState(0)
    let[empName, setEmpName] = useState("")
    let[salary, setSalary] = useState(0)

    let empIdChanged = (event)=>{
        setId(event.target.value)
    }

    let empNameChanged = (event)=>{
        setEmpName(event.target.value)
    }

    let salaryChanged = (event)=>{
        setSalary(event.target.value)
    }

    return (
        <div>
            <h2>Fill in Employee Details</h2>
            <br />
            <form>
                <input type="number" name="id" value={empId} placeholder = "Employee ID" onChange={empIdChanged} />   &emsp;
                <input type="text" name="empName" value={empName} placeholder="Employee Name" onChange={empNameChanged} /> &emsp; 
            <input type="number" name="salary" value={salary} placeholder="Salary" onChange={salaryChanged} />  <br />
            <br />
            <input type="button" onClick={submit} value="Submit"/>&emsp;<input type="button" onClick={getAllDetails} value="Refresh" /> 
            {/* <input type="reset" /> */}
            

        </form>
        <br />
        <center> <table border="1">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>

                     {
                        employees.map((employee)=>(
                            <DisplayEmployee key={employee.id} employee={employee} />
                            // <tr>
                            // <td>{employee.id}</td>
                            // <td>{employee.empName}</td>
                            // <td>{employee.salary}</td>
                            // </tr>
                        ))
                    }
                </tbody>

        </table> </center>

    </div>
  )
   
                }


export default EmployeeList