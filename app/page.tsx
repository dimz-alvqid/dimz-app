import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Still in Development</h1>
      <ul>
        <li><Link href="/links">Links</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><a href="/random">Random (Page Not Found)</a></li>
      </ul>
    </div>
  );
}
