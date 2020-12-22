import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.min.css";
import "./SwiperPeopleToFllow.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

SwiperCore.use([]);
 
function SwiperPeopleToFllow() {
  const arrOfUserToFollow = new Array(20).fill("");
  const [view, setView] = useState(window.innerWidth < 560 ? 2 : 4);
  useEffect(() => {
    window.onresize = (e) => {
      setView(window.innerWidth < 560 ? 2 : 4);
    };
  }, []);
  return (
    <>
      <Swiper className="swiper-container" slidesPerView={view}>
        <div className="header-bottom"></div>
        <div className="swiper-header"><h4>People To Follow</h4></div>
        {arrOfUserToFollow.map((user, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="menu-user-info">
                <div className="user-info-av-bt">
                  <Avatar className="user-info-avatar" />
                  <button>Following</button>
                </div>
                <div className="user-info-menu">
                  <div className="user-info-details">
                    <Link to="/profile" className="link">
                      <h4>Ahmed Hakim</h4>
                    </Link>
                    <span>@ahned</span>
                    <p>description of an acount if there is an a descript</p>
                    <div className="user-info-followers">
                      <h6>
                        10 <span>following</span>
                      </h6>
                      <h6>
                        102 <span>followers</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperPeopleToFllow;
