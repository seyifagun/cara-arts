import "../styles/globals.scss";
import Footer from"../components/Footer"
import Navbar from"../components/Navbar"
import 'aos/dist/aos.css';
import "../styles/FooterNew.scss"

export const metadata = {
  title: "Cara Art",
  description: "Immense yourself in the beauty of Africa Art",
  author: "Oluwaseyi Fagun",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
};

export default layout;
