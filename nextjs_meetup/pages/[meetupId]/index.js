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

export async function getStaticPaths() {
  // as this component is dynamic, the getStaticProps should pre-generate the pages
  //for all possible Id-s. But that requires all the URLs
  //this function solves that

  return {
    fallback: false, //paths contains all possible values if its false
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: "m1",
        title: "First meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6b/ThePantheon.jpg",
        address: "Some Address 5, 12345 Some city",
        description: "This is a the first meetup",
      },
    },
  };
}

export default MeetupDetails;
