import Head from "next/head";
import { FunctionComponent } from "react";

export interface SEOProps {
  title: string;
  description: string;
}

const SEO: FunctionComponent<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title} - Iota Chi Rho`}</title>
      <meta property="description" content={description} />
    </Head>
  );
};

export default SEO;
