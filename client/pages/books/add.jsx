import Header from "@/components/header";
import Head from "next/head";
import Router from "next/router";

const submitBook = async (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const url = process.env.LOCAL_API + "books";
  const res = await fetch(url, {
    body: JSON.stringify({
      books: [
        {
          title: title,
        },
      ],
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (res.status == 201) {
    // Success
    Router.push("/books");
  }
};

export default function Books() {
  return (
    <>
      <Head>
        <title>Books | New</title>
      </Head>
      <Header>Add New Book</Header>
      <form className="flex flex-col" onSubmit={submitBook}>
        <label htmlFor="name" className="mb-2 italic">
          Name
        </label>
        <input
          className="mb-4 border-b-2"
          id="title"
          name="title"
          type="text"
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
