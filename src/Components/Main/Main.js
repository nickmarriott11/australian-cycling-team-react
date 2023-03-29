import React from "react";
import Welcome from "./Welcome";
import "./Main.css";
import VideoHighlights from "./VideoHighlights";
import LeaderboardTable from "./LeaderboardTable";
import UpcomingEvents from "./UpcomingEvents";
import ClubsDirectory from "./ClubsDirectory";
import News from "./News";
import ContactForm from "./ContactForm";
import ErrorBoundary from "../error_boundary/error_boundary";

const Main = () => {
  return (
    <div className="MainSection">
      <ErrorBoundary>
        <Welcome />
      </ErrorBoundary>
      <ErrorBoundary>
        <VideoHighlights />
      </ErrorBoundary>
      <ErrorBoundary>
        <LeaderboardTable />
      </ErrorBoundary>
      <ErrorBoundary>
        <UpcomingEvents />
      </ErrorBoundary>
      <ErrorBoundary>
        <ClubsDirectory />
      </ErrorBoundary>
      <ErrorBoundary>
        <News />
      </ErrorBoundary>
      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
