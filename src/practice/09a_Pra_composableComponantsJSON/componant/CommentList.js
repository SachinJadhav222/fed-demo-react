import React from "react";
import Comment from "./Comment";
import Profile from "./Profile";

export default class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.comments.map(comment => (
      <Comment key={comment.id} author={comment.author}>
        {comment.text}
      </Comment>
    ));

    let profileNode = this.props.profile.map(profile => (
      <profileNode name={profile.name}></profileNode>
    ));
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Comment</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>{commentNodes}</tbody>
          <tbody>{profileNode}</tbody>
        </table>
      </>
    );
  }
}
