import myPhoto from '../resources/about_img.webp';

const About = () => {
  return (
    <div className="h-full flex flex-col md:flex-row bg-[#C46F16] rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={myPhoto}
          alt="Blog Cover"
          className="object-contain  w-full h-full"    
        />
      </div>

      {/* Text and Button */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
        <p className="text-lg font-semibold mb-4">
        Hi there! I&apos;m Nicole Wanjala, a blogger, digital marketer and creativist with a passion for storytelling and empowering others.         </p>
        <p className="text-gray-600 mb-6">
            I dipped my toes into the blogging world back in 2018, and that&apos;s where my journey into social media management, and digital marketing truly took off.
            Over the years, I&apos;ve had the pleasure of working with diverse local and international companies, crafting engaging content, managing socials and creating digital communications and assets. One of my memorable experiences was creating weekly content for five small businesses while at a digital marketing firm.
            Currently, I&apos;m immersed in exciting roles as a digital marketer for a Women’s Empowerment podcast network and a tech community dedicated to DEIB in tech. Additionally, I manage the social media presence of Living in Kigali, a vibrant tours and travel company located in Kigali, Rwanda.
            Outside work, you&apos;ll often find me biking, reading, and exploring my creativity and new destinations. I am always solving problems and seeking simpler ways to work efficiently. I&apos;m also delving into the worlds of UI/UX Design and AI, fascinated by the thought and design behind how things work.
            Get in touch today and let&apos;s find out how I can be of help to you or your business.
        </p>

        <a href="https://nickysaw.com" target="_blank" rel="noopener noreferrer">
          <button className="rounded-lg bg-pink-500 hover:bg-pink-700 py-3 px-6 font-sans text-xs sm:text-sm lg:text-base font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
            CHECK OUT MY BLOG
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
// md:object-cover sm:object-fit lg:object-fit