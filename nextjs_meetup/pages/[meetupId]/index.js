import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/ThePantheon.jpg"
      }
      title="first meetup"
      address={"some addnress"}
      description={"desc"}
    />
  );
};

export default MeetupDetails;
