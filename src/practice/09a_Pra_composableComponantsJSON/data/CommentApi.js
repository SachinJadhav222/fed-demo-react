import axios from "axios";

export default class CommentApi {
  static getAllComments(cb) {
    axios
      .get("http://localhost:4000/comments")
      .then(response => cb(response.data))
      .catch(error => {
        throw error;
      });
  }

  static getProfile(cb) {
    axios
      .get("http://localhost:4000/profile")
      .then(response => cb(response.data))
      .catch(error => {
        throw error;
      });
  }
}
