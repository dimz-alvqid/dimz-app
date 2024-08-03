import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function Page() {
  async function getData() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const res = await fetch('../data.json').then((res) => res.json());
      setData(res)
    }, []);
    
    return data;
  }
  
  const params = useParams()
  const { id } = params;
  const item = getData();
  const containerData = item.find((item) => item.id === id);

  useEffect(() => {
    if (containerData) {
      window.location.href = containerData.targetlink;
      setTimeout(() => {
        window.location.href = containerData.redirectlink;
      }, 5000); // Delay 5 detik sebelum redirect ke redirectlink
    }
  }, [containerData]);

  if (!containerData) {
    return <p>Container not found.</p>;
  }

  return <p>Preparing your download...</p>;
}
