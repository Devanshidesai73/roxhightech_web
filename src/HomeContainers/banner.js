"use client";
import Image from "next/image";
import React from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

const query = gql`
  query getLandingPage {
    landingPage {
      data {
        attributes {
          banner_title
          __typename
        }
      }
    }
  }
`;

const Banner = () => {
  const { data, error, loading } = useQuery(query);
  console.log("DATA ::: ", data, loading, error);
  if (loading) return <p>Loading ....</p>;
  if (error) return <p>Error ....</p>;

  return (
    <section className="flex min-h-screen p-4 md:px-12 xl:flex-row flex-col gap-12 justify-center">
      <div className="relative z-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl xl:text-6xl text-center font-sans xl:leading-tight tracking-wider font-bold uppercase">
          {data.landingPage.data.attributes.banner_title}
        </h1>
        <div className="relative flex -z-10">
          <Image
            alt="Underline"
            src="/underline.svg"
            height={500}
            width={600}
            className="h-auto -mt-3 md:-mt-4 lg:-mt-5 object-contain -ml-8 2xl:ml-44"
          />
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <Image
          alt="crossword"
          src="/crossword.svg"
          height={1200}
          width={1200}
          priority={true}
          className="object-contain h-auto"
        />
      </div>
    </section>
  );
};

export default Banner;
