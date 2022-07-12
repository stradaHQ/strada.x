import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>strada | We make cool shit cybernetically</title>
        <meta name="description" content="We make cool shit cybernetically" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mx-auto">
        <p className="font-basement font-2xl font-bold tracking-wide">
          <i className="lni lni-angellist lni-32" /> strada | We make cool shit
          cybernetically
        </p>
      </div>
    </>
  );
}
