import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import one from '../resources/coments/1.webp'
import two from '../resources/coments/2.webp'
import three from '../resources/coments/3.webp'
import four from '../resources/coments/4.webp'
import five from '../resources/coments/5.webp'
import six from '../resources/coments/6.webp'
import seven from '../resources/coments/7.webp'
import eight from '../resources/coments/8.webp'
import nine from '../resources/coments/9.webp'

const testimonials = [
  {
    comment:
      "Nicole's marketing expertise elevated our practice. Her creativity and professionalism attracted new clients, making our services more accessible and impactful. Working with her was a game-changer!",
    author: "C. Carlos",
    photo: one,
  },
  {
    comment:
      "I highly recommend Nicole. She is very knowledgeable and constantly keeps up with trends in the industry. Her suggestions for content improvement and strategic campaigns boosted our classes' attendance and retreat signups, fostering a sense of well-being and connection.",
    author: "A. Amber",
    photo: two,
  },
  {
    comment:
      "I was impressed with Nicole's research and communication skills. Her digital marketing skills showcased our properties beautifully, attracting qualified buyers. She's a true professional who was quick to understand the real estate market in the US, despite her being from Kenya.",
    author: "G. Nash",
    photo: three,
  },
  {
    comment:
      "Nicole is a very experienced social media manager. Her informative posts and engaging campaigns highlighted our expertise, making us the go-to choice for sinus health in Hyderabad. Highly recommend her services!",
    author: "Dr. Rao",
    photo: four,
  },
  {
    comment:
      "Nicole's marketing transformed our shop into a parenting paradise! Her creative campaigns and engaging content which showcased our products attracted new moms, making shopping a joyful and personalized experience.",
    author: "M. Williams",
    photo: five,
  },
  {
    comment:
      "It was a pleasure to work with Nicole! She is a strong team player who is willing to roll up her sleeves and get things done. Additionally, she is amenable to feedback and always looking to create the best possible solution. Her expertise in social media management increased engagement and brought valuable insights to our members.",
    author: "P. Samsons",
    photo: six,
  },
  {
    comment:
      "Nicole is very proactive and quick to provide alternative solutions to arising problems. Her social media prowess took our travel business to new heights! Her captivating video content including reels and ads, boosted trip bookings, making every trip an unforgettable adventure for our clients.",
    author: "S. Muthoni",
    photo: seven,
  },
  {
    comment:
      "Nicole showcased a thorough understanding of the world of style and fashion. Working with her was a style sensation! Her digital marketing skills showcased our app's features, attracting fashionistas and boosting user engagement. She gave us creative ideas which helped to grow the app and attract its target audience!",
    author: "P. Kashata",
    photo: eight,
  },
  {
    comment:
      "Nicole is a self-starter who can operate effectively with little direction and she consistently delivers quality work. Her strategic approach, engaging content and marketing assets attracted investors and like-minded individuals, making our community grow immensely.",
    author: "K. Saint",
    photo: nine,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const numVisibleTestimonials = () => {
    if (window.innerWidth < 640) {
      return 1; // Show one testimonial on mobile screens
    } else if (window.innerWidth < 1024) {
      return 2; // Show two testimonials on tablet screens
    } else {
      return 3; // Show three testimonials on laptop and larger screens
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + numVisibleTestimonials()
  );

  return (
    <div className="w-full  items-center justify-center bg-zinc-200">
      <h2 className="text-3xl pl-16 font-extrabold text-gray-900 mb-8">
        Testimonials
      </h2>
      <div className="flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none sm:p-3"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none sm:p-3"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
          <div className="carousel flex space-x-4 sm:space-x-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card p-6 bg-white rounded-lg shadow-md animate-fade-in-${index} sm:w-1/3 md:w-1/2 lg:w-1/3`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.author}
                  className="h-20 w-20 rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-center mb-2">
                  {testimonial.comment}
                </p>
                <p className="text-gray-600 text-center">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
