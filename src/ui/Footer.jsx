function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-cyan-50 ">
      <div className="max-w-7xl mx-auto text-center">
        Copyright&copy; {year} by Samir Neupane
      </div>
    </footer>
  );
}

export default Footer;
