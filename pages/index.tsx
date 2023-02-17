import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-app-blue">HOME</div>
      <div>Welcome to the home page!</div>
      <ul>
        <li>
          <Link href="/perfil">Go to profile</Link>
        </li>
        <li>
          <Link href="/perfil/configuracion">Go to profile settings</Link>
        </li>
        <li>
          <Link href="/detalle-de-evento/1">
            View event details for event 1
          </Link>
        </li>
        <li>
          <Link href="/login">Go to login</Link>
        </li>
        <li>
          <Link href="/sign-up">Go to sign up</Link>
        </li>
      </ul>
    </>
  );
}
