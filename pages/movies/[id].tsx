import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const path = router.query.id;
  return <div>detail page {path}</div>;
};

export default Detail;
