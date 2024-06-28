import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import arrow from "../../assets/arrow.svg";
import { blogsList } from "../../data";

const BlogsList = (props) => {

  return (
    <>
    <div className="headerText">Blogs by <span className="aprn">APRN</span></div>
    <div className="blogsContainer">
      {blogsList.map((blog, index) => {
        return (
          <div className="blogCard" key={index}>
            <img src={blog.image} alt="blog"/>
            <div className="blogContent">
              <div className="blogTitle">{blog.title}</div>
              <div className="blogSubText">{blog.subTitle}</div>
              <div className="readMore">
                <span>Read More</span>
                <img src={arrow} alt="arrow" className="arrow"/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(BlogsList);
