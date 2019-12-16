import CommentData from './CommentData';

export default class CommentApi {
    static getAllComment(){
        return CommentData.comments
    }
}