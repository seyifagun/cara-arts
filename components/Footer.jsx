import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footerBody">
            <div className="footerBody__container">
                <div className="footerBody__container_flex">
                    <div className="footerBody__container_flex_col1">
                        <div>
                            <img src='/assets/new__logo.png' alt='logo'/>
                        </div>
                        <p className="paragraph">This company intriduced in 2000 and providing 
                            exquisite and valuable products for customer. 
                            Our main aim is to satisfy our customers so 
                            they can represent us out there.
                        </p>
                        <div>
                            <img src='/assets/payment.png' alt='logo'/>
                        </div>
                    </div>
                    <div className="footerBody__container_flex_col2">
                        <h2>Featured</h2>
                        <div className="list">
                            <a href="#" target="blank>">Painting</a>
                            <a href="#" target="blank>">Art</a>
                            <a href="#" target="blank>">Sculpture</a>
                            <a href="#" target="blank>">Photography</a>
                            <a href="#" target="blank>">Digital</a>
                            <a href="#" target="blank>">Metal Art</a>
                            <a href="#" target="blank>">Textile</a>

                        </div>
                    </div>
                    <div className="footerBody__container_flex_col3">
                        <h2>Contact Us</h2>
                        <div className="list">
                            <h4>Address</h4>
                            <p>14 Copeland, Elliots Field, Rugby</p>
                        </div>
                        <div className="list">
                            <h4>Phone</h4>
                            <p>(123) 456-7898</p>
                        </div>
                        <div className="list">
                            <h4>Email</h4>
                            <p>store.cara.co.uk</p>
                        </div>
                    </div>
                    <div className="footerBody__container_flex_col3">
                        <iframe height={300} frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=14,%20copeland,%20browsover,%20rughy,%20united%20kingdom+(Cara%20Art)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
        </footer>
        <div className="rights_div">
            <p>All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer