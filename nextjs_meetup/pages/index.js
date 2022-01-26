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
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
