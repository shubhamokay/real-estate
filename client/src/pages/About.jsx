import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Welcome to Estate Ease, where your dream home is just a click
              away.
            </h2>
            <p className="mt-6 text-gray-600">
              At Estate Ease, we believe that finding the perfect home should be
              a joyful journey, not a stressful ordeal. Our mission is to
              simplify the real estate experience, making it easy for buyers,
              sellers, and renters to connect with their ideal properties. With
              a focus on user-friendly technology and personalized service, we
              strive to provide a seamless and enjoyable process from start to
              finish. Whether you're searching for your dream home, looking to
              sell your property, or seeking a rental, Estate Ease is here to
              guide you every step of the way. Welcome to a new era of real
              estate convenience with Estate Ease.
            </p>
            <p className="mt-4 text-gray-600">
              {" "}
              Explore unique spaces that inspire, redefine, and reflect your
              individuality. Uncover homes that embody luxury, comfort, and
              serenity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
