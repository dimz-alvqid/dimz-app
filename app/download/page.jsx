import linkData from './link';
export default function Page() {
  return (
    <div>
     <table class="table">
      <thead>
       <tr>
        <th scope="col">NAME</th>
       </tr>
      </thead>
      <tbody>
        {linkData.map((list) => {
          return (
             <tr>
               <td>{list.name}</td>
             </tr>
           )
         })
        }
       </tbody>
      </table>
     </div>
  );
}
