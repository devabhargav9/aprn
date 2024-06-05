import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./clientsList.css";
import clients from "../../assets/clients.svg";

const ClientList = () => {
  useEffect(() => {
    console.log("Hello Deva");
  }, []);

  return (
    <div className="clientsListContiner">
      <div className="clientsListHeading">Meet Our <span className="diffText">Clients</span></div>
      <div className="subText">Hear What Our Clients Have to Say! Glowing Recommendations <br/>from Our Customers</div>
     <img src={clients} alt="clients" className="clients" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(ClientList);
