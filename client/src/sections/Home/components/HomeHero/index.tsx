import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Input, Row, Typography } from "antd";

import beirutImage from "../../assets/Beirut.jpg";
import berlinImage from "../../assets/Berlin.jpg";
import parisImage from "../../assets/Paris.jpg";
import londonImage from "../../assets/london.jpg";

const { Title } = Typography;
const { Search } = Input;

interface Props {
  onSearch: (value: string) => void;
}

export const HomeHero = ({ onSearch }: Props) => {
  return (
    <div className="home-hero">
      <div className="home-hero__search">
        <Title className="home-hero__title">Search for House</Title>
        <Search
          placeholder="ex: 'Beirut'"
          size="large"
          enterButton
          className="home-hero__search-input"
          onSearch={onSearch}
        />
      </div>
      <Row gutter={12} className="home-hero__cards">
        <Col xs={12} md={6}>
          <Link to="/listings/beirut">
            <Card cover={<img alt="Beirut" src={beirutImage} />}>Beirut</Card>
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <Link to="/listings/berlin">
            <Card cover={<img alt="Berlin" src={berlinImage} />}>Berlin</Card>
          </Link>
        </Col>
        <Col xs={0} md={6}>
          <Link to="/listings/paris">
            <Card cover={<img alt="Paris" src={parisImage} />}>Paris</Card>
          </Link>
        </Col>
        <Col xs={0} md={6}>
          <Link to="/listings/london">
            <Card cover={<img alt="London" src={londonImage} />}>London</Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
