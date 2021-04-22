import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Layout, Typography } from "antd";
import { LISTINGS } from "../../lib/graphql/queries";
import {
  Listings as ListingsData,
  ListingsVariables,
} from "../../lib/graphql/queries/Listings/__generated__/Listings";
import { ListingsFilter } from "../../lib/graphql/globalTypes";
import { useScrollToTop } from "../../lib/hooks";
import { displayErrorMessage } from "../../lib/utils";
import { HomeHero, HomeListings, HomeListingsSkeleton } from "./components";

const { Content } = Layout;
const { Paragraph, Title } = Typography;

const PAGE_LIMIT = 4;
const PAGE_NUMBER = 1;

export const Home = () => {
  const { loading, data } = useQuery<ListingsData, ListingsVariables>(
    LISTINGS,
    {
      variables: {
        filter: ListingsFilter.PRICE_HIGH_TO_LOW,
        limit: PAGE_LIMIT,
        page: PAGE_NUMBER,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const history = useHistory();
  useScrollToTop();

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      history.push(`/listings/${trimmedValue}`);
    } else {
      displayErrorMessage("Please enter a valid search!");
    }
  };

  const renderListingsSection = () => {
    if (loading) {
      return <HomeListingsSkeleton />;
    }

    if (data) {
      return (
        <HomeListings
          title="Lux Accommodation"
          listings={data.listings.result}
        />
      );
    }

    return null;
  };

  return (
    <Content className="home">
      <div className="home__cta-section">
        <Link
          to="/listings/United Kingdom"
          className="ant-btn ant-btn-dashed ant-btn-lg home__cta-section-button"
        >
          Popular in UK
        </Link>
        <Link
          to="/listings/Turkey"
          className="ant-btn ant-btn-dashed ant-btn-lg home__cta-section-button"
        >
          Popular in Turkey
        </Link>
        <Link
          to="/listings/Maldives"
          className="ant-btn ant-btn-dashed ant-btn-lg home__cta-section-button"
        >
          Popular in Maldives
        </Link>
      </div>

      {renderListingsSection()}

      <HomeHero onSearch={onSearch} />
    </Content>
  );
};
