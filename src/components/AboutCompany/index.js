import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";

const AboutCompany = (props) => {
  useEffect(() => {
    console.log("Hello Deva");
  }, []);

  return (
    <div className="aboutCompanyContainer">
      <img
        src={props.image}
        alt="About Company"
        className="aboutCompanyImage"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(AboutCompany);
