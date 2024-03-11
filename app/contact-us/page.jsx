import Head from '@/components/Head'
import React from 'react'
import styles from "../../styles/Contactus.module.scss";
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <>
      <Head title='Cara Arts | Contact Us' />

      <main className='container'>
        <section>
          <div className={styles.profileBody}>
            <div className={styles.profileBody__form}>
              <div className={styles.profileBody__form_inputs}>
                <div className={styles.formBody}>
                  <span><b>Contact Us</b></span>
                    {/* <button>Edit Profile{' '}<EditIcon width={20} height={20} /></button> */}
                </div>
                <form action="" method="post">                                    
                  <div className={styles.formBody__form_input}>
                    <div className={styles.inputLabel}>
                      <label htmlFor="firstName">First Name<span style={{color:'red'}}>*</span></label>
                      <input placeholder="First Name" name="firstName" />
                    </div>
                    <div className={styles.inputLabel}>
                      <label htmlFor="lastName">Last Name<span style={{color:'red'}}>*</span></label>
                      <input placeholder="Last Name" name="lastName" />
                    </div>
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="emailAddress">Email Address<span style={{color:'red'}}>*</span></label>
                    <input type='text' placeholder="Email Address" name="emailAddress" />
                  </div>
                  <div className={styles.formBody__form_}>
                  <label htmlFor="phoneNumber">Phone Number<span style={{color:'red'}}>*</span></label>
                      <input type='number' placeholder="Phone Number" name="phoneNumber" />
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="subject">Subject<span style={{color:'red'}}>*</span></label>
                    <input type='text' placeholder="Subject" name="Subject" />
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="message">Message<span style={{color:'red'}}>*</span></label>
                    <textarea id="message" name="message" rows="4" cols="50"></textarea>
                  </div>
                  
                  <div className={styles.formBody__form_btn}>
                    <button>Send Message</button>
                  </div>
                </form>    
              </div>
            </div>
           
          </div>
        </section>

      </main>
    </>
  )
}

export default ContactUs