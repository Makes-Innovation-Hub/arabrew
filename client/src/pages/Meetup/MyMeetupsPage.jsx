import { useEffect } from "react";
import { useGetAllMeetupsQuery } from "../../features/meetupApi.js";
import { Link } from "react-router-dom";

const MyMeetupsPage = () => {
  const {
    data: meetups,
    isLoading,
    isError,
    refetch,
  } = useGetAllMeetupsQuery();
  console.log("Meetups data:", meetups);

  useEffect(() => {
    // Refetch meetups whenever the page is loaded
    refetch();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching meetups</div>;

  // Check if meetups is an object
  if (typeof meetups !== "object" || meetups === null) {
    return <div>No meetups found.</div>;
  }
  console.log(`ffadafwe ${meetups.id}`);

  return (
    <div>
      <h1>My Meetups</h1>
      {Object.keys(meetups).map((key) => {
        const meetup = meetups[key];
        console.log(`meetups id : ${meetup.title}`);
        return (
          <div key={meetup.id}>
            <h2>{meetup.title}</h2>
            <p>Day, Date, local hour: {meetup.date}</p>
            <p>
              Location:{" "}
              <a
                href={`https://maps.google.com/?q=${meetup.location}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {meetup.location}
              </a>
            </p>
            <p>Cost: {meetup.price}</p>
            <p>Description: {meetup.description}</p>
            {/* <p>Attendees: {meetup.attendees.length}</p> */}
            <Link to={`/attendees/${meetup.id}`}>View Attendees</Link>
          </div>
        );
      })}
    </div>
  );
};

export default MyMeetupsPage;
