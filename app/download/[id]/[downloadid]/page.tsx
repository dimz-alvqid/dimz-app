import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import linkData from '../../link.json';

export default function RedirectPage() {
  const router = useRouter();
  const { id, downloadid } = router.query;

  useEffect(() => {
    if (id && downloadid) {
      const foundItem = linkData.find((item) => item.id === id && item.downloadid === downloadid);
      if (foundItem) {
        // Redirect to targetlink and then to redirectlink
        window.location.href = foundItem.targetlink;
        setTimeout(() => {
          window.location.href = foundItem.redirectlink;
        }, 1000); // Delay to allow the first redirect to happen
      }
    }
  }, [id, downloadid]);

  return <div>Redirecting...</div>;
}
