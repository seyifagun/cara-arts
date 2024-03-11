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
                {/* <div className={styles.info}>
                    <div className={styles.info__textArea}>
                        <p>The Resort is a unique, diverse, and integrated living environment where
                            residents have access to modern amenities while living directly in a pristine
                            parkland environment. The mixture of uses (including residential, commercial,
                            retail, sports, tourism, agricultural, educational, and leisure) creates an
                            integrated live-work-play environment. The residential offerings range
                            from single residential stands to high-density apartment living.
                            Strategically positioned along the major route that connects Western
                            Nigeria to the East, South-South, and Northern Nigeria, the Resort is
                            situated on 156.849 hectares of land about 95 km from the Osun - Osogbo
                            Sacred Grove –a UNESCO world heritage site in Osogbo, Osun State
                            and within 150km of eight other airports. </p>
                    </div>
                    <div className={styles.info__mediaArea}>
                        <Image src={images.abstract3} alt="about-us-img" />
                    </div>
                </div> */}
                <div className={styles.info}>
                    <div className={styles.info__textArea}>
                        <h4>Our Mission</h4>
                        <p>Akure Airport Aerotropolis Development Project, known as
                            &quot;Ala Resort,&quot; is to provide the community with thoughtfully
                            designed and expertly executed residential and commercial
                            developments. Our goal is to establish an eco-friendly and
                            dynamic community that encompasses diverse and
                            complementary activities, enabling individuals to work, learn,
                            shop, reside, dine, and enjoy entertainment within mere minutes
                            of the Akure airport terminals in Ondo State.</p>
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
