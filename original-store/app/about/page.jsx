import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div 
      className="w-full min-h-screen py-10 px-10 md:px-32 bg-light-background dark:bg-dark-background">
      
      <h2 className="bg-gradient-to-r from-light-primary from-50% via-light-accent via-50% to-light-secondary to-90% inline-block bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl drop-shadow-xl text-center 2xl:mx-60 my-10">
        Welcome to SneakerAffiliates, your go-to platform for the latest trends
        and best deals in the world of footwear! We're passionate about sneakers
        and are dedicated to helping you find the perfect pair.
      </h2>

      <section className="m-4 py-8 border-y border-gray">
        <h3 className="text-2xl text-light-text dark:text-lightGray">Who We Are</h3>
        <p className="sm:text-xl/relaxed text-gray py-4">
          Original Store is a learning project created by a group of
          enthusiasts who love sneakers and digital marketing. Our mission is to
          connect sneaker lovers with the best online stores through affiliate
          marketing, making it easier for you to discover and purchase your
          favorite shoes at great prices.
        </p>
      </section>

      <section className="m-4 py-8 border-b border-gray">
      <h3 className="text-2xl text-light-text dark:text-lightGray">What We Do</h3>
      <ul className="sm:text-xl/relaxed text-gray py-4 list-disc">
      <li className="py-2">
            <b className="text-2xl">Curated Collections:</b> We handpick sneakers from top brands and online
            retailers, showcasing the latest releases and timeless classics.
          </li>
      <li className="py-2">
            Deals & Discounts: Our affiliate partnerships allow us to offer
            exclusive deals and discounts, helping you save money while shopping
            for the latest styles.
          </li>
      <li className="py-2">
            Learning & Growing: This project is a learning experience for us,
            aimed at understanding the dynamics of affiliate marketing and
            e-commerce. We're constantly updating our site with new features and
            content to enhance your shopping experience.
          </li>
        </ul>
      </section>

      <section className="m-4 py-8 border-b border-gray">
      <h3 className="text-2xl text-light-text dark:text-lightGray">Why Choose Us?</h3>
      <ul className="sm:text-xl/relaxed text-gray py-4 list-disc">
      <li className="py-2">
            Passion for Sneakers: Our team is made up of sneaker enthusiasts who
            understand the culture and trends. We share your passion for finding
            the perfect pair.
          </li>
      <li className="py-2">
            Convenience: We've streamlined the shopping process, allowing you to
            browse a wide selection of sneakers from multiple stores in one
            place.
          </li>
      <li className="py-2">
            Trust & Transparency: As an affiliate, we earn a commission on sales
            generated through our links, at no extra cost to you. This supports
            our project and helps us improve our platform.
          </li>
        </ul>
      </section>

      <section className="mx-4 py-8 border-b border-gray">
      <h3 className="text-2xl text-light-text dark:text-lightGray">Join Us on Our Journey</h3>
        <p className="sm:text-xl/relaxed text-gray py-4">
          Original Store is more than just a shopping platform; it's a
          community for sneakerheads. Follow us on social media, subscribe to
          our newsletter, and stay updated on the latest sneaker news, trends,
          and exclusive offers.
        </p>
        <p className="sm:text-xl/relaxed text-gray py-px">
          Thank you for being a part of our learning journey. We're excited to
          grow and improve, and we appreciate your support!
        </p>
      </section>
    </div>
  );
};

export default Page;
