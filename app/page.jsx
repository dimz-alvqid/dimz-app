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
      <div style={{ marginTop: "100px" }}></div>
      <div class="container w-container">
    <div class="welcome-container">
    <div class="welcome-title">
    <h1 class="heading">Welcome</h1>
    </div>
    <div class="testimonial-card-three">
    <div class="dropdown-card-content">
      <center>
        <h1>Dimz Project.</h1>
        <p>©2024 Dimz&AlvinQ-id</p>
      </center>
    </div>
      </div>
      </div>
        </div>
    </div>
  );
}
