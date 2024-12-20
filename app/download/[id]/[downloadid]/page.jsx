"use client";
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import linkData from '@/data/link';

export default function RedirectPage() {
  const router = useParams();
  const { id, downloadid } = router;

  useEffect(() => {
    if (id && downloadid) {
      const foundItem = linkData.find((item) => item.id === id && item.downloadid === downloadid);
      if (foundItem) {
        // Redirect to targetlink and then to redirectlink
        window.location.href = foundItem.targetlink;
        setTimeout(() => {
          window.location.href = foundItem.redirectlink;
        }, 1000); // Delay to allow the first redirect to happen
      } else {
        return <div>Eror! Please Report to dimzCraft</div>;
      }
    }
  }, [id, downloadid]);

  return <div>Redirecting...</div>;
}
