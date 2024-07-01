import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./clientsList.css";
import { clients } from "../../data";

const ClientList = () => {
  const renderClients = () => {
    return (
      <div className="clientsGrid">
        {clients.map((client, index) => (
          <div key={index} className="clientItem">
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="clientsListContainer">
      <div className="clientsListHeading">
        Meet Our <span className="diffText">Clients</span>
      </div>
      <div className="clientsSubtext">
        Hear What Our Clients Have to Say! Glowing Recommendations <br />
        from Our Customers
      </div>
      {renderClients()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(ClientList);
