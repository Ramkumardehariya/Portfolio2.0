"use client";

import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardContainer, CardItem } from "../../utiils/ui/3d-card";

export const ProjectCard = ({ title, image, tech, link }) => {
  const handleClick = () => {
    // You could add analytics tracking here if needed
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-8 border">
        <CardItem
          translateZ="50"
          className="project-card text-4xl font-bold text-neutral-600 dark:text-white cursor-pointer hover:text-black"
        >
          <h1 
            onClick={handleClick}
            className="text-white hover:text-black transition-colors duration-300"
          >
            {title}
          </h1>
        </CardItem>

        <div className="my-4">
          <CardItem
            translateZ="100"
            className=" text-neutral-500 dark:text-neutral-300"
          >
            <p className="">
              <span className="font-bold">Tech: </span>
              <span className="text-sm ml-1">{tech}</span>
            </p>
          </CardItem>
        </div>

        <CardItem translateZ="100" className="w-full">
          <div className="overflow-hidden rounded-xl group-hover/card:shadow-xl">
            <img
              src={image}
              alt={`${title} project screenshot`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};