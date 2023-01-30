import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import Person4Icon from "@mui/icons-material/Person4";
import { FollowerModalList } from "./FollowerModalList";
import { FollowingModalList } from "./FollowingModalList";
import { SubGreddit } from "./SubGreddit";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Content = ({ followers, handleDelete, followings, handleDelete_ }) => {
  // const data = JSON.parse(localStorage.getItem("token"));
  // const handleEdit = (e) => {
  //   console.log(e);
  //   // console.log(data.username);
  //   e.preventDefault(); // this is because nhi to page refresh hojayega and state lose krdega
  //   if (e === "") {
  //     alert("You must Enter an Username");
  //   } else {
  //     localStorage.setUsername(data.username, JSON.stringify({ e }));
  //   }
  // };

  return (
    <div className="content">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span><ArrowDropDownCircleIcon fontSize='large' /></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <button class="nav-link active" aria-current="page" href="#">
                    Profile Page
                  </button>
                </li>
                <li class="nav-item">
                <button class="nav-link active" aria-current="page" href="#">
                    My Sub-Greddit
                  </button>
                </li>
                <li class="nav-item">
                <button class="nav-link active" aria-current="page" href="#">
                    Sub-Greddit
                  </button>
                </li>
                <li class="nav-item">
                <button class="nav-link active" aria-current="page" href="#">
                   Saved Posts
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="card">
          <div>
            <div
              class="card-img-top"
              // src={require("./bg_blur.jpeg")}
              alt="Card image cap"
            />
          </div>
          <div class="card-body little-profile text-center">
            <div class="pro-img">
              <img src={require("./th.jpeg")} alt="user" class="shadow" />
            </div>
            <h3 class="m-b-0" className="details">
              <EditIcon
                className="edit"
                role="button"
                tabIndex="-1"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              />
              <div
                class="modal fade"
                id="editModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        className="editTitle"
                        id="exampleModalLabel"
                      >
                        Edit
                      </h1>
                    </div>
                    <div class="modal-body ">
                      <form className="login_form">
                        <input
                          className="edit_form"
                          // value={data.username}
                          // onChange={(e) => setUsername(e.target.value)}
                          type="username"
                          placeholder="New Username"
                          id="username"
                          name="username"
                          required
                        />
                        <div>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <span className="admin">admin</span>
              <MoreVertIcon
                className="more"
                role="button"
                tabIndex="-1"
                data-bs-toggle="modal"
                data-bs-target="#moreModal"
              />
              <div
                class="modal fade"
                id="moreModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="exampleModalLabel"
                        className="info_"
                      >
                        Information
                      </h1>
                    </div>
                    <div class="modal-body">
                      <div className="info">Name: Khushi Goyal</div>
                      <div className="info">Age: 19</div>
                      <div className="info">Contact: 123456789</div>
                      <div className="info">Email: khushi123@gmail.com</div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
            <a
              href="javascript:void(0)"
              class="m-t-10 m-b-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
              data-abc="true"
            >
              Follow
            </a>
            <div class="row text-center m-t-20">
              <div
                class="col-lg-6 col-md-6 f-1"
                role="button"
                tabIndex="-1"
                data-bs-toggle="modal"
                data-bs-target="#followerModal"
              >
                <h3 class="m-b-0 font-light">{followers.length}</h3>
                <Person4Icon />
                <span className="special">Followers</span>
              </div>
              <div
                class="modal fade"
                id="followerModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header ">
                      <h1
                        class="modal-title fs-5"
                        id="exampleModalLabel"
                        className="follower"
                      >
                        My Followers
                      </h1>
                    </div>
                    <div className="search">
                      <SearchIcon fontSize="medium" style={{ marginLeft: 5 }} />
                      <input placeholder="Search" className="searchInput" />
                    </div>
                    <div class="modal-body">
                      {followers.length ? (
                        <FollowerModalList
                          followers={followers}
                          handleDelete={handleDelete}
                        />
                      ) : (
                        <p className="info">No Followers</p>
                      )}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 f-1"
                role="button"
                tabIndex="-1"
                data-bs-toggle="modal"
                data-bs-target="#followingModal"
              >
                <h3 class="m-b-0 font-light">{followings.length}</h3>
                <Person4Icon />
                <span className="special">Following</span>
              </div>
              <div
                class="modal fade"
                id="followingModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="exampleModalLabel"
                        className="follower"
                      >
                        My Followings
                      </h1>
                    </div>
                    <div className="search">
                      <SearchIcon fontSize="medium" style={{ marginLeft: 5 }} />
                      <input placeholder="Search" className="searchInput" />
                    </div>
                    <div class="modal-body">
                      {followings.length ? (
                        <FollowingModalList
                          followings={followings}
                          handleDelete_={handleDelete_}
                        />
                      ) : (
                        <p className="info">No Followings</p>
                      )}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <h1>My Sub Greddits</h1>
        </div>
        <SubGreddit /> */}
      </div>
    </div>
  );
};

export default Content;
