import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { id } = router.query; // `id` is the dynamic parameter from the URL

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>The ID is: {id}</p>
    </div>
  );
};

export default DynamicPage;
