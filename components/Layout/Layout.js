import Link from "next/link";

function Layout({children}) {
  return (
    <>
      <header>
        <h2>Botostart</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://botostart.ir" target="_blank" rel="noreferrer">Botostart</a>
        Next.js Course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
