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
        {linkData.map((array) => {
          return (
           <tr>
             <td><a href={`/${array.id}`}>{array.name}</a></td>
           </tr>
          )
        })
        }
       </tbody>
      </table>
     </div>
  );
}
