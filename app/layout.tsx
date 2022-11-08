import { AppProps } from "next/app";
import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";

type LayoutProps = PropsWithChildren<{}>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <Head>next 13 application</Head>
      <body>
        header
        {children}
        <Footer />
      </body>
    </html>
  )
}