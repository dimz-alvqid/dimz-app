"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import data from '../data';

async function Page() {
  const params = useParams()
  const { id } = params;
  const item = data;
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

export default Page;