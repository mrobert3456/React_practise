import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     //fetching datas
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browse a huge list og highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}
export async function getStaticProps() {
  //this code is not exposed to the client
  // this will be executed before the component function
  //prepares props for the component
  //so the component will be rendered with the required data
  //so the data will appear in the html code,which is good for SEO

  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://robi:8XLRyI82rUciZFfM@cluster0.dxypt.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupdCollection = db.collection("meetups");

  const meetups = await meetupdCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //incremental static generation
    //this would be regenerated on the server at least every 10 esconds, if there are requests coming in
    // the data is never older then 10 seconds
    //so you dont have to rebuild and redeploy the entire app ,when some date changed
  };
}

// export async function getServerSideProps (context){
//     const req =context.req;
//     const res = context.res;

//     //run in the server after deployment
//     //fetch data..
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }
export default HomePage;
