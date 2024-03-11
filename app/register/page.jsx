"use client"

import "../../styles/Register.scss"
import {FcGoogle} from "react-icons/fc"
import { useState, useEffect } from "react"

const Register = () => {

  return (
    <section className="registerMain">
        <div className="register">
            <img src="/Afro_art/friends.jpg" alt="register-img" className="register_decor" />
            <div className="register_content">
                <form className="register_content_form">
                    <input name="username" placeholder="Username" />
                    <input name="email" type='email' placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" />
                    <input 
                        id="image" 
                        type="file"  
                        name="profileImage" 
                        accept="image/*" 
                        style={{display:"none"}} 
                        required
                    />
                    <label htmlFor="image">
                        <img src="/assets/addImage.png" alt="add profile"/>
                        <p>Upload Profile Photo</p>
                    </label>
                    <a className="btnStyle" href="/">
                        Register
                    </a>
                </form>
                <a href="/">
                    <button className="google">
                        <p>Log In with Google</p>
                        <FcGoogle />
                    </button>
                </a>
                <a href="/login">Already have an account? Log In Here</a>
            </div>
        </div>
    </section>
  )
}

export default Register;