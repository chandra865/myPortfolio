'use client';
import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 flex flex-col items-center gap-2 ">
        <img
          style={{ width: "200px" }}
          className=" bg-white mb-3"
          src={data.companylogo}
          alt=""
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
