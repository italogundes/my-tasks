import React from 'react'

const TableTasks = ({tasks}) => {
  return (
    <div className='table-content'>
      <table style={{border: '1px solid black'}}>
        <tr>
          <th>Feito?</th>
          <th>Descrição</th>
          <th>Ação</th>
        </tr>
        {tasks.map((task, index) => {
          return <tr key={index}>
            <td><input type="checkbox" /></td>
            <td>{task}</td>
            <td>excluir</td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default TableTasks;
