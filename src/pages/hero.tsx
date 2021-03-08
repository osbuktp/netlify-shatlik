import { GetStaticProps, NextPage } from "next";
import React, { FC } from "react";

interface IAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
}
interface IProps {
  content: { attributes: IAttributes };
}

const Hero: NextPage<IProps> = ({ content }) => {
  const {
    attributes: { hero_title, hero_description, hero_image },
  } = content;
  return (
    <div>
      {hero_title}
      {hero_description}
      {hero_image}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import("content/pages/hero.md");
  return { props: { content: content.default } };
};

export default Hero;
