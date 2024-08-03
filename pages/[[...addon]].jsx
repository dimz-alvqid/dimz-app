import { useRouter } from 'next/router';
import FetchApi from './api';

const AddonPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const data = await FetchApi('./data.json');
  const item = data.find((item) => item.id === id[0]);

  const handleDownload = (link) => {
    document.location = link;
  };

  // JSX untuk render halaman dengan tombol download, dll.
  return (
    <div>
      <h1>{item.name}</h1>
      <a href={item.showcaselink} target="_blank" rel="noopener noreferrer">
        Lihat Showcase
      </a>
      <div>
        <button onClick={() => handleDownload(item.shortenerlink)}>Download</button>
        {item.hidealternativelink ? (
          <button onClick={() => handleDownload(item.alternativelink)}>Download Alternatif</button>
        ) : (
          <button>More</button>
        )}
      </div>
    </div>
  );
};

export default AddonPage;
