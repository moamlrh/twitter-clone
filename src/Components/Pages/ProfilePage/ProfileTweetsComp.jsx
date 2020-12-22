import React from "react";
import { useParams } from "react-router-dom";
import Posts from "../../Posts/Posts";

function ProfileTweetsComp() {
  const {userId} = useParams()
  console.log(userId)
  return (
    <>
      <Posts />
    </>
  );
}

export default ProfileTweetsComp;
