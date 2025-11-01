import React from "react";
import SearchFilterBar from "../components/SearchFilterBar";
import JobList from "../components/JobList";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function HomePage() {
  return (
    <div className="p-6  mt-10 md:mt-10 w-full h-full ">
      
      <SearchFilterBar />
      <JobList />
      <ScrollToTopButton/>
    </div>
  );
}
//ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBrDNb0vr8oe2C/TBbgSL0UDKcR1EqY5xHgs0DKCjseL your_email@example.com