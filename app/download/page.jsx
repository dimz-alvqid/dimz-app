import { Table } from 'react-bootstrap';
import linkData from './link';

export default function Page() {
  return (
   <div>
    <Table striped bordered hover>
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
  );
}
