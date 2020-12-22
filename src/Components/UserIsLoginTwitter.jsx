import React, { useEffect } from "react";
import MessageWithUserPage from "./Pages/Messages/MessageWithUserPage";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import SidebarRight from "./SidebarRight/SidebarRight";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import HomePage from "./Pages/HomePage";
import ShowTweet from "./Posts/ShowTweet";
import EditProfilePage from "./Pages/ProfilePage/EditProfilePage";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import NotificationsPage from "./Pages/Notifications/NotificationsPage";
import MessagesPage from "./Pages/Messages/MessagesPage";
import CreatePost from "./CreatePost/CreatePost";
import { connect } from "react-redux";
import { signinCase } from "../Redux/User/UserActions";
import { useCookies } from "react-cookie";

function UserIsLoginTwitter({ SigninCaseDisp }) {
  const [cookie] = useCookies(["user"]);
  const user = cookie.user;
  const history = useHistory()
  useEffect(() => {
    if (user) {
      SigninCaseDisp(user);
    }else{
      history.push('/login')
    }
  }, [SigninCaseDisp,history, user]);

  return (
    <div>
      <div className="app">
        <div className="app-sidebar-left" id="side-left">
          <SidebarLeft />
        </div>
        <div className="app-posts">
          <Switch> 
            <Route exact path="/" component={HomePage} />
            <Route exact path="/explore" component={ExplorePage} />
            <Route exact path="/notifications" component={NotificationsPage} />
            <Route exact path="/messages" component={MessagesPage} />
            <Route
              exact
              path="/messages/:msg_user_id"
              component={MessageWithUserPage}
            />
            <Route exact path="/bookmarks" />
            <Route exact path="/lists" component={ProfilePage} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/settings/profile" component={EditProfilePage} />
            <Route exact path="/post/status/:postId" component={ShowTweet} />
            <Redirect exact from="/userId" to="/userId/tweets" />
            <Redirect exact from="/login" to="/" />
            <Route
              path="/:userId/:tab?"
              render={(props) => <ProfilePage {...props} />}
            />
          </Switch>
        </div>
        <div id="shadow-div"></div>
        <div className="app-sidebar-right">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  SigninCaseDisp: (user) => dispatch(signinCase(user)),
});

export default connect(null, mapDispatch)(UserIsLoginTwitter);
