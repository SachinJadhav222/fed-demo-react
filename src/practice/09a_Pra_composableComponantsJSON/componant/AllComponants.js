import React from "react";
import CommentList from "./CommentList";
import CommentApi from "../data/CommentApi";

export default class AllComponants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      profile: []
    };
  }
  componentDidMount() {
    CommentApi.getAllComments(data => this.setState({ comments: data }));
    CommentApi.getProfile(data => this.setState({ profile: data }));
  }
  render() {
    return (
      <>
        <h1>Comments</h1>
        <CommentList
          comments={this.state.comments}
          profile={this.state.profile}
        />
      </>
    );
  }
}
