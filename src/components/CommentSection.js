import React from "react";
import Comment from "./Comment";

function CommentSection({ comments }) {

    return (
        <div id="comment-div">
            {comments.map(entry => {
                return (
                    <Comment
                    key={entry.id}
                    user={entry.user}
                    comment={entry.comment}
                    />
                )
            })}
        </div>
    )
}

export default CommentSection;
