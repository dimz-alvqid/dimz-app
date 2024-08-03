import React from 'react';
import linkData from './link.js';

export default function Page() {
  return (
   <div class="table">
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
   </div>
  );
}
