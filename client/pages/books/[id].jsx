import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/header";
import Router from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://127.0.0.1:8000/api/books/${id}`);
  const data = await res.json();

  return { props: { book: data[0] } };
}

export default function BookDetail({book}) {
  const router = useRouter();
  const id = router.query.id;

  const updateBook = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const url = `http://127.0.0.1:8000/api/books/${id}`;
    const res = await fetch(url, {
      body: JSON.stringify({
        title: title
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    if (res.status == 200) {
      // Success
      Router.push('/books')
    }    
  };

  return (
    <>
      <Head>
        <title>Books | Edit</title>
      </Head>
      <Header>Edit Book</Header>
      <form className="flex flex-col w-96 self-center" onSubmit={updateBook}>
        <label htmlFor="title" className="mb-2 italic">
          Title
        </label>
        <input
          className="mb-4 border-b-2 p-2"
          id="title"
          name="title"
          type="text"
          defaultValue={book.title}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
}