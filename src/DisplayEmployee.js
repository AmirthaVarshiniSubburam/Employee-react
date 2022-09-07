import React from 'react'

function DisplayEmployee(props) {
  return (
    <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.empName}</td>
        <td>{props.employee.salary}</td>
    </tr>
  )
}

export default DisplayEmployee