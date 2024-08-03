import { useRouter } from 'next/router';
import data from './data.js';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  
  const containerData = data.find((item) => item.id === id);

  if (!containerData) {
    return <p>Container not found.</p>;
  }

  return (
    <div>
      <h1>{containerData.name}</h1>
      <iframe
        width="560"
        height="315"
        src={containerData.showcaselink}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <button
          onClick={() => window.location.href = containerData.shortenerlink}
        >
          Download
        </button>
        {!containerData.hidealternativelink && (
          <button
            onClick={() => window.location.href = containerData.alternativelink}
          >
            More
          </button>
        )}
      </div>
    </div>
  );
}
