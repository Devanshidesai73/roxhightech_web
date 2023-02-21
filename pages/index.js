import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RoxHightech</title>
        <meta
          name="description"
          content="Expertly crafted custom web design and development services to elevate your online presence and achieve your business goals at RoxHightech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
}
