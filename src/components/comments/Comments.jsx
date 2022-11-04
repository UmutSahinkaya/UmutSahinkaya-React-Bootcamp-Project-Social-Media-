import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
    const {currentUser}=useContext(AuthContext)
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, amet!",
      name: "Umut Şahinkaya",
      userId: 1,
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQENH7PxMixW8Q/profile-displayphoto-shrink_200_200/0/1659559455846?e=1672876800&v=beta&t=MLGtRHadh4cXQaU499_zaT0G18YmAaL_PJTkhGIEk_s",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quasi ab veritatis accusamus maxime saepe soluta nam ex nisi magni.",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/756758/pexels-photo-756758.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
    };
    
export default Comments;
