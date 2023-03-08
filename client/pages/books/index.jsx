import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/books");
  const data = await res.json();
  return {
    props: {
      books: data,
    },
  };
};

const deleteBook = async (id) => {
  const url = "http://127.0.0.1:8000/api/books/" + id;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  if (res.status == 200) {
    // Success
    Router.push("/books");
  }
};

export default function Books({ books }) {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <Header>Books</Header>
      <Link
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center self-end mb-2"
        href="books/add"
      >
        Add New Book
      </Link>
      <table className="table-auto border-collapse border-solid divide-slate-700 w-full">
        <thead>
          <tr>
            <th className="bg-sky-700 border text-left px-8 py-3">Title</th>
            <th className="bg-sky-700 border text-left px-8 py-3">Author</th>
            <th className="bg-sky-700 border text-center px-8 py-3 w-1/4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="border px-8 py-3">{book.title}</td>
              <td className="border px-8 py-3">{book.author}</td>
              <td className="border px-8 py-3 text-center">
                <Link
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center self-end mr-8"
                  href={"books/" + book.id}
                >
                  Edit
                </Link>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center self-end"
                  href="books/delete"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
