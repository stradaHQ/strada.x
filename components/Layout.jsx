import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="my-20">
        {children}
        <Footer />
      </div>
    </>
  );
}
