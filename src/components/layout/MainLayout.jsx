import Navbar from "../navigation/Navbar.jsx";
import Footer from "../navigation/Footer.jsx";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 w-full flex justify-center px-4 py-10">
        <div className="w-full max-w-6xl bg-white border border-slate-200 rounded-3xl px-6 py-10 shadow-sm">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

