
import { ArrowCircleLeft, ArrowCircleRight, ArrowIcon, SlideDown } from '@/components/SVGs/SVGicons'
import Image from 'next/image'
import images from '../public/images'
import styles from '../styles/Home.module.scss'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import useResponsive from '@/Hooks/useResponsiveness'
import { heroSectionCarousel } from '../components/HeroImages'
import Link from 'next/link'

export default function Hero() {

	//#region hooks

	const onMobile = useResponsive();

	//#endregion

	//#region state

	const carouselRef = useRef(null);

	const [currentlyActiveIndex, setCurrentlyActiveIndex] = useState(0);

	const [maxReached, setMaxReached] = useState(false);

	//#endregion

	//#region function

	function moveCardsLeft() {

		if (currentlyActiveIndex == 5 && carouselRef.current) {
			carouselRef.current.scroll({
				left: 0,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(0);

			return;
		}
		if (carouselRef.current) {
			// });
			carouselRef.current.scroll({
				left: carouselRef.current.scrollLeft += 140,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(currentlyActiveIndex + 1);
		}
	}

	function moveCardsRight() {

		if (currentlyActiveIndex == 0) {
			return;
		}
		if (carouselRef.current) {
			carouselRef.current.scroll({
				left: carouselRef.current.scrollLeft -= 140,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(currentlyActiveIndex - 1);
		}
	}

	//#endregion

	//#region react hooks

	useEffect(() => {

		const scrollInterval = setInterval(() => {
			if (carouselRef.current) {
				if (onMobile && carouselRef.current.scrollLeft >= 1296) {
					setMaxReached(true);
				}
				if (!onMobile && carouselRef.current.scrollLeft >= 560) {
					setMaxReached(true);
				}

				const _currentlyActiveIndex = currentlyActiveIndex + 1;
				carouselRef.current.scroll({
					left: onMobile ? carouselRef.current.scrollLeft += 224 : carouselRef.current.scrollLeft += 140,
					behavior: 'smooth',
				});

				setCurrentlyActiveIndex(_currentlyActiveIndex);

				console.log('currentlyActiveIndex: ', currentlyActiveIndex);
				console.log('_currentlyActiveIndex: ', _currentlyActiveIndex);
				console.log('carouselRef.current.scrollLeft: ', carouselRef.current.scrollLeft);
			}
		}, 3000);

		return () => clearInterval(scrollInterval);
	}, [maxReached, currentlyActiveIndex]);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scroll({
				left: 0,
				behavior: 'smooth'
			});
			setCurrentlyActiveIndex(0);
			setMaxReached(false);
		}
	}, [maxReached]);

	useEffect(() => {
		AOS.init();
	}, []);

	//#endregion

	return (
		<section className={`${styles.homepage}`}>
			<div className={styles.heroSection}>
				<div className={styles.heroSection__image}>
					<Image src={heroSectionCarousel[currentlyActiveIndex]?.image} alt={heroSectionCarousel[currentlyActiveIndex]?.name} style={{width: "100%", height:"750px"}}/>
					{/* <Image src={backgroundImage} alt="beautiful_city_china" /> */}
				</div>

				<div className={styles.heroSection__contents}>
					<div className={styles.left}>
						<div className={styles.textArea} data-aos={onMobile ? "fade-up" : "fade-left"}>
							<h2>{onMobile && <br />}African Art{!onMobile && <br />}<span>made for you</span></h2>
							<p>Creating a desired artworks from pure imaginations to spread the value, culture, spirituality
                                of the African People
                            </p>
							<div className={styles.textArea__button}>
                            <Link href="#feed"><button>Explore <ArrowIcon /></button></Link>
							</div>
						</div>
						{!onMobile && <div className={styles.scrollIcon}>
							<ScrollLink to="Morocco Art" smooth={true} duration={500} offset={0}>
								<p>Scroll down</p>
								<span className={styles.slideIcon}><SlideDown /></span>
							</ScrollLink>
						</div>}
					</div>
					{!onMobile &&
						<div className={styles.carouselArea}>
							<div className={styles.carousel} data-aos="fade-up" ref={carouselRef}>
								{
									heroSectionCarousel.map((each, index) => (
										<div className={styles.eachCard} key={index}>
											<Image src={each.image} alt={each.name} /> 
											<p>{each.name}</p> 
										</div>
									))
								}
							</div>
							<div className={styles.indicator}>
								{/* <span onClick={moveCardsLeft} className={`${currentlyActiveIndex == 5 ? styles.inactive : ''}`}><ArrowCircleLeft /></span>  */}
								<span onClick={moveCardsLeft}><ArrowCircleLeft /></span>
								<span onClick={moveCardsRight} className={`${currentlyActiveIndex == 0 ? styles.inactive : ''}`}><ArrowCircleRight /></span>
							</div>
						</div>}
					{onMobile &&
						<div className={styles.mobileCarouselArea}>
							<div className={styles.carousel} data-aos="fade-up" ref={carouselRef}>
								{
									heroSectionCarousel.map((each, index) => (
										<div className={styles.eachCard} key={index}>
											<Image src={each.image} alt={each.name} />
											<p>{each.name}</p>
										</div>
									))
								}
							</div>
							<div className={styles.indicator}>
								{/* <span onClick={moveCardsLeft} className={`${currentlyActiveIndex == 5 ? styles.inactive : ''}`}><ArrowCircleLeft /></span>  */}
								<span onClick={moveCardsLeft}><ArrowCircleLeft /></span>
								<span onClick={moveCardsRight} className={`${currentlyActiveIndex == 0 ? styles.inactive : ''}`}><ArrowCircleRight /></span>
							</div>
						</div>}
				</div>
			</div>

		</section>
	)
}
