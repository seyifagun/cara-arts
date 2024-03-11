"use client"

import Navbar from "../components/Navbar"
import Feed from "../components/Feed"
import Footer from"../components/Footer"
import Hero from "../components/Hero"
import "../styles/Home.scss"
import "../styles/FooterNew.scss"

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div style={{height:"100vh"}}>
        <Hero />
      </div>
      <section id="feed">
      <Feed />
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default Home