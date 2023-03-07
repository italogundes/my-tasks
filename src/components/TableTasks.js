import React from 'react'

const TableTasks = () => {
  return (
    <div className='table-content'>
      <table style={{border: '1px solid black'}}>
        <tr>
          <th>Feito?</th>
          <th>Descrição</th>
          <th>Ação</th>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Ir ao supermercado</td>
          <td>Excluir</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Ir ao supermercado</td>
          <td>Excluir</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Ir ao supermercado</td>
          <td>Excluir</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Ir ao supermercado</td>
          <td>Excluir</td>
        </tr>
      </table>
    </div>
  )
}

export default TableTasks;
