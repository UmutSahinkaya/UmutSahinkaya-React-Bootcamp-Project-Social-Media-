import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Uğur Erdal",
      userId: 1,
      profilePic:
        "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nisi natus cum ipsum aliquid perspiciatis impedit fugiat veniam quia expedita?",
      img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Uğur Erdal",
      userId: 1,
      profilePic:
        "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatibus adipisci necessitatibus recusandae exercitationem, praesentium minima a repudiandae error nihil cum fugit, nesciunt expedita quos officiis! Culpa, architecto laboriosam earum nobis possimus exercitationem tempore ad. Cumque quas natus commodi, neque beatae ducimus rem, quaerat fugit provident perspiciatis dolorum impedit debitis eveniet fuga quidem vitae vero consequuntur cum laboriosam laudantium aspernatur consequatur reiciendis. Maxime, odit sint expedita aliquid dicta facere earum quam molestiae voluptate sapiente officia harum numquam. Fuga hic ad autem suscipit ratione rem sed voluptatem exercitationem sapiente ut architecto non et dolorum similique labore magnam quibusdam odio, quia quos?",
    },
  ];
  return <div className="posts">
  {posts.map(post=>(
    <Post post={post} key={post.id}/>
  ))}
  </div>;
};

export default Posts;
