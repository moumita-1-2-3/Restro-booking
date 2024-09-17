import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Momo's Kitchen offers a mouthwatering menu of authentic Indian fast
              food in a vibrant and inviting atmosphere. From sizzling tandoori
              dishes to spicy chaats, each bite is a flavor-packed delight. With
              its lively ambiance and delicious food, TandooriRush guarantees an
              unforgettable dining experience for every guest
            </p>
            <Link to={"/expmenu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
