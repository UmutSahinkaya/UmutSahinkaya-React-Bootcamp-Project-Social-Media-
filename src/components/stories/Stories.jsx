import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

  const {currentUser}=useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Uğur Erdal",
      img: "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
    },
    {
      id: 2,
      name: "Uğur Erdal",
      img: "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
    },
    {
      id: 3,
      name: "Uğur Erdal",
      img: "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
    },
    {
      id: 4,
      name: "Uğur Erdal",
      img: "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic}></img>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img}></img>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
