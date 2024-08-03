import { useEffect } from 'react';
import { useRouter } from 'next/router';
import data from 'download/link.json';

export default function DownloadPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const containerData = data.find((item) => item.id === id);

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
