import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/ThePantheon.jpg",
    address: "Some Address 5, 12345 Some city",
    description: "This is a the first meetup",
  },

  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/ThePantheon.jpg",
    address: "Some Address 5, 12345 Some city",
    description: "This is a the second meetup",
  },
];
function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     //fetching datas
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  // this will be executed before the component function
  //prepares props for the component
  //so the component will be rendered with the required data
  //so the data will appear in the html code,which is good for SEO

  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
