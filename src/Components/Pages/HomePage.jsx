import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import FlareOutlinedIcon from "@material-ui/icons/FlareOutlined";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";
// import SwiperPeopleToFllow from "../Body/utili/SwiperPeopleToFllow";
import SideLeftMenu from "../SidebarLeft/SideLeftMenu";
import { Twitter } from "@material-ui/icons";
import MobileNavbar from "../Body/utili/MobileNavbar";
import { firestore } from "../../firebase/config";
import FlipMove from "react-flip-move";
import { CircularProgress } from "@material-ui/core";
import { useCookies } from "react-cookie";

function HomePage() {
  const [PostsState, setPosts] = useState([]);
  const allPosts = firestore.collection("posts");
  const {user} = useCookies('user')[0]
  useEffect(() => {
    const arr = [];
    const getAllPosts = async () => {
      await allPosts.onSnapshot((posts) => {
        posts.docChanges().forEach((change) => {
          if (change.type === "added") {
            arr.unshift(change.doc.data());
          } else if (change.type === "removed") {
            document.getElementById(change.doc.data().post_id).style.display =
              "none";
          }
          // else if (change.type === "modified"){
          //   if(change.doc.data().user_id === user.uid){
          //     alert('yup !')
          //   }
          // }
        });
        setPosts([...arr, ...PostsState]);
      });
    };
    getAllPosts();
  }, []);

  return (
    <>
      <div className="header-and-create-post">
        <h3 style={{ fontSize: "20px" }}>
          <Link to="/" className="sidebar-options-link">
            Home
          </Link>
        </h3>
        <FlareOutlinedIcon fontSize="default" className="header-logo-stars" />
        <div className="show-sidebar-left-icon">
          <SideLeftMenu
            style={{ fontSize: "10px" }}
            className="avatar-icon-header"
          />
          <Twitter
            className="twitter-icon-header"
            style={{ cursor: "pointer" }}
          />
          <FlareOutlinedIcon
            fontSize="default"
            style={{ cursor: "pointer" }}
            className="header-logo-stars"
          />
        </div>
      </div>
      <div className="app-create-post">
        <CreatePost />
      </div>
      <div className="progress-circle">
        {PostsState.length === 0 && <CircularProgress />}
      </div>
      <FlipMove>
        {PostsState.map((post, index) => (
          <Posts post={post} key={index} />
        ))}
      </FlipMove>
      <div className="swiper-people-to-follow">
        {/* <SwiperPeopleToFllow /> */}
      </div>
      <div>
        <MobileNavbar />
      </div>
    </>
  );
}

export default HomePage;
