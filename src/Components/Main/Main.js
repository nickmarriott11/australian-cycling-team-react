import React from "react";
import Welcome from "./Welcome";
import VideoHighlights from "./VideoHighlights";
import LeaderboardTable from "./LeaderboardTable";
import UpcomingEvents from "./UpcomingEvents";
import ClubsDirectory from "./ClubsDirectory";
import News from "./News";
import ContactForm from "./ContactForm";


const Main = () => {
  return (
    <div className="MainSection">
      <Welcome />
      <VideoHighlights />
      <LeaderboardTable />
      <UpcomingEvents />
      <ClubsDirectory />
      <News />
      <ContactForm />
    </div> //
  );
};

export default Main;