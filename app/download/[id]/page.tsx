import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import linkData from '../link.json';

export default function DownloadPage() {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState<any>(null);
  const [showAlternative, setShowAlternative] = useState(false);

  useEffect(() => {
    if (id) {
      const foundItem = linkData.find((item) => item.id === id);
      setItem(foundItem);
    }
  }, [id]);

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
