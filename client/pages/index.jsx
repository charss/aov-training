import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header>Home Page</Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, qui
        expedita accusantium repudiandae nobis nemo corporis a quae ut ab,
        iure suscipit. Qui quia voluptatibus veritatis totam eos quaerat
        tenetur!
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus ea nobis, nisi veritatis harum debitis illo eaque facilis esse error exercitationem ex, culpa sequi accusantium deserunt. Error, obcaecati aperiam!
      </p>
    </>
  );
}
