import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <container className={styles.main}>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, qui
          expedita accusantium repudiandae nobis nemo corporis a quae ut ab,
          iure suscipit. Qui quia voluptatibus veritatis totam eos quaerat
          tenetur!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus ea nobis, nisi veritatis harum debitis illo eaque facilis esse error exercitationem ex, culpa sequi accusantium deserunt. Error, obcaecati aperiam!
        </p>
      </container>
    </>
  );
}
