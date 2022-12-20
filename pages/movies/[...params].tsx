import Seo from 'components/Seo';
import { useRouter } from 'next/router';

const Detail = ({ params }) => {
  const router = useRouter();
  console.log('router :>> ', router);
  const [title, id] = router.query.params ?? params;
  return (
    <div>
      <Seo title={title} />
      detail page
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export function getServerSideProps({
  params: { params },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('params :>> ', params);
  return {
    props: { params },
  };
}
