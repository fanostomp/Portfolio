import Link from 'next/link';
export default function NotFound() {
  return <main id="main-content" className="section-wrap not-found"><span className="eyebrow">404 / Page not found</span><h1>Let&apos;s get you<br />back to the work.</h1><Link className="primary-link" href="/">Return to portfolio ↗</Link></main>;
}
