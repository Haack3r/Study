import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Animation from "@/components/home/animation";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>박보근 포트폴리오</title>
        <meta name="description" content="오늘도 열심히" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-gray-600 body-font py-24">
        <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
          <Animation />
          <Hero />
        </div>
      </section>
    </Layout>
  );
}