import React from 'react'
import { Table } from 'react-bootstrap';

function InfoTable({ tableInfo }) {
  return (
    <Table striped bordered hover size="sm">
            <thead>
              <tr>
                {tableInfo.tableColumns.map((val) => (
                  <th>{val}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableInfo.tableRows.map((val) => (
                <tr>
                  {Object.values(val).map((v) => (
                    <td>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
  )
}

export default InfoTable