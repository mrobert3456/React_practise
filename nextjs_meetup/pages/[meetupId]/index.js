import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  // as this component is dynamic, the getStaticProps should pre-generate the pages
  //for all possible Id-s. But that requires all the URLs
  //this function solves that

  const client = await MongoClient.connect(
    "mongodb+srv://robi:8XLRyI82rUciZFfM@cluster0.dxypt.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupdCollection = db.collection("meetups");

  const meetups = await meetupdCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false, //paths contains all possible values if its false
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://robi:8XLRyI82rUciZFfM@cluster0.dxypt.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupdCollection = db.collection("meetups");

  const selectedMeetup = await meetupdCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
