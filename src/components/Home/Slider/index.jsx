import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div>
                    <img src="http://placehold.it/1920x300" alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src="http://placehold.it/1920x300" alt="Slide 1" className="slider_img" />
                </div>
                <div>
                    <img src="http://placehold.it/1920x300" alt="Slide 1" className="slider_img" />
                </div>
            </Slider>
        </section>
    )
}

export default HomeSlider;