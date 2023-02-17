import { useRouter } from 'next/router';

function DetalleDeEvento() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Event details for event with ID: {id}</div>;
}

export default DetalleDeEvento;
