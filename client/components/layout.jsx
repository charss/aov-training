import Navbar from "./navbar/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className='flex justify-items-center-items-center flex-col px-52 py-10 flex-grow'>{children}</main>
      <Footer />
    </div>
  )
};