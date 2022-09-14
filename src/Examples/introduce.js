import React, { Component } from "react";
import Intro from "../../../RJB24-manhph/2-examples/src/Examples/JSX/Intro";

const TEXT__INTRO = `Park Chae-young (tiếng Hàn: 박채영; tên tiếng Anh: Roseanne Park, sinh ngày 11 tháng 2 năm 1997), 
thường được biết đến với nghệ danh Rosé (Hangul: 로제)[2] là nữ ca sĩ người New Zealand gốc Hàn Quốc, 
thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý.`;
const cardStyle = {
  width: "50%",
  height: "400px",
  margin: "4% auto",
};
const user = {
  firstName: "Park",
  lastName: "Chae-young",
  nickName: "Rose",
  vavatarUrl: "/images/rose1.jpg",
  profile: "https://www.instagram.com/roses_are_rosie/",
};
const userLeft = [
  {
  firstName: "Park1",
  lastName: "Chae-young",
  nickName: "Rose",
  vavatarUrl: "/images/rose1.jpg",
  profile: "https://www.instagram.com/roses_are_rosie/",
},
{
  firstName: "Park2",
  lastName: "Chae-young",
  nickName: "Rose",
  vavatarUrl: "/images/rose1.jpg",
  profile: "https://www.instagram.com/roses_are_rosie/",
},
{
    firstName: "Park3",
    lastName: "Chae-young",
    nickName: "Rose",
    vavatarUrl: "/images/rose1.jpg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
];
let gotoProfile = (
  <a href={user.profile} className="btn btn-primary">
    More... {user.nickName}
  </a>
);
let introduction = React.createElement(
  "p",
  {className: "card-text modify_color"},
  TEXT_INTRO
);
funtion render (user) {
  return (
    <React.Fragment>
      <div className="card" style={cardStyle}>
        <img
        className="card-img-top"
        src={user.vavatarUrl}
        width="200"
        height="300"
        alt={formatName(user)}
        style={
          {objectFit: 'contain'}
        }></img>
        <div className="card-body">
          <h5 className="card-tittle">{formatName(user)}</h5>
          {introduction}
          {gotoProfile}
        </div>
      </div>
    </React.Fragment>
  );
}
funtion formatName(user) {
  return user.firstName + " " + user.lastName;
}
funtion intro () {
  return (
    <>
    <div className="row">
      <div className="col">{userLeft.map ((u) => render(u))}</div>
      <div className="col">{[...Array(3)].map(() => render(user))}</div>
    </div>
    </>
  );
}

export default Intro;
