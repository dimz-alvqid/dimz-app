import { Table } from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider';
import React from 'react';
import linkData from './link.js';

export default function Page() {
  return (
    <SSRProvider>
   <div>
    <Table>
      <thead>
        <tr>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        {linkData.map((array) => {
          return (
           <tr>
             <td><a href={`/${array.id}`}>{array.name}</a></td>
           </tr>
          )
        })
        }
      </tbody>
    </Table>
  </div>
      </SSRProvider>
  );
}
