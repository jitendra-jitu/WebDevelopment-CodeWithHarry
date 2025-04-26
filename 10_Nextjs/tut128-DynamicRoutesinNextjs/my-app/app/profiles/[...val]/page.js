// app/profiles/[...val]/page.js

const Page = async ({ params }) => {
  const { val } =await params;
  console.log(params ); // ✅ Clean log

  return (
    <div>
      <h1>Dynamic Params</h1>
    </div>
  );
};

export default Page;
