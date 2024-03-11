"use client";

import Image from "next/image";
import Head from "@/components/Head";
import styles from '../../styles/aboutUs.module.scss';
import images from "../../public/images";

const About = () => {
  return (
    <>
      <Head title='Cara Arts | About Us' />
        <div className={styles.aboutPage}>
            <div className={`${styles.bodyContent} container`}>
                <h2>About Cara Arts</h2>
                <div className={styles.info}>
                    <div className={styles.info__textArea}>
                        <h4>Our Mission</h4>
                        <p>Cara Arts is a website and portfolio platform for artists in the entertainment industry. 

                            With generative AI becoming widespread, we felt the need to build a platform where human-made art can be found easily. 

                            Many platforms currently accept AI art when it&apos;s not ethical, while others have promised “no AI forever” policies without in-depth industry knowledge. 

                            The future of creative industries will require nuanced understanding and support to help artists and companies connect and work together, and Cara Arts wants to be there to bridge the gap. </p>
                    </div>
                    <div className={styles.mediaArea}>
                        <div className={styles.mediaArea__videoElement}>
                            <Image src={images.culture} alt="about-us-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;
