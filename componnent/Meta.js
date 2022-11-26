import Head from "next/head";

export default function Meta({title,name,content}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name={name} content={content}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}
