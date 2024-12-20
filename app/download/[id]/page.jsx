"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import linkData from '@/data/link';

export default function Page() {
  const params = useParams();
  const { id } = params;
  
  const [item, setItem] = useState(null);
  const [showAlternative, setShowAlternative] = useState(false);
  const foundItem = linkData.find((item) => item.id === id);

  useEffect(() => {
    if (id && foundItem) {
      setItem(foundItem);
    }
  }, [foundItem]);
  
  if(!foundItem) return <div>Addon Not Found!</div>;
  if (!item) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{item.name}</h1>
      <iframe
        width="560"
        height="315"
        src={item.showcaselink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{ marginTop: '20px' }}>
        <a href={item.shortenerlink} target="_blank">
          <button>Download</button>
        </a>
        {item.hidealternativelink && (
          <button onClick={() => setShowAlternative(!showAlternative)}>More</button>
        )}
        {showAlternative && (
          <a href={item.altenativelink} target="_blank">
            <button>Alternative Download</button>
          </a>
        )}
      </div>
    </div>
  );
}
