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
// export async function getStaticProps() {
//   // this will be executed before the component function
//   //prepares props for the component
//   //so the component will be rendered with the required data
//   //so the data will appear in the html code,which is good for SEO

//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10, //incremental static generation
//     //this would be regenerated on the server at least every 10 esconds, if there are requests coming in
//     // the data is never older then 10 seconds
//     //so you dont have to rebuild and redeploy the entire app ,when some date changed
// };
// }

export async function getServerSideProps (context){
    const req =context.req;
    const res = context.res;

    //run in the server after deployment
    //fetch data..
    return {
        props:{
            meetups: DUMMY_MEETUPS
        }
    };
}
export default HomePage;
