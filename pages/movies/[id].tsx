import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const path = router.query.id;
  return (
    <div>
      detail page {path}
      <h4>{router.query.title || 'loading...'}</h4>
    </div>
  );
};

export default Detail;
