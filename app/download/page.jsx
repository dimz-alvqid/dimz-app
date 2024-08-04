import { Table } from 'react-bootstrap';
import linkData from '@/data/link';

export default function Page() {
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>NAME</th>
        </tr>
      </thead>
        {linkData.map((array) => {
          return (
            <tbody key={array}>
             <tr>
              <td><a href={"/download/" + array.id}>{array.name}</a></td>
             </tr>
             </tbody>
          )
        })
        }
     </Table>
  </div>
  );
}
