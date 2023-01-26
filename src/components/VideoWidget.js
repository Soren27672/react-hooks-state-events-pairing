import React, { useState } from "react";
import Content from "./Content";
import CommentSection from "./CommentSection";
import IncrementButton from "./IncrementButton";
import Toggle from "./Toggle";


function VideoWidget({ title, embedUrl, views, createdAt, upvotes, downvotes, comments }) {
    const [displayComments, setDisplayComments] = useState(false);

    return (
        <div>
            <Content
            title={title}
            embedUrl={embedUrl}
            views={views}
            createdAt={createdAt} />
            <IncrementButton
            tail={' Likes'}
            initialValue={upvotes} />
            <IncrementButton
            tail={' Dislikes'}
            initialValue={downvotes} />
            <Toggle
            boolean={displayComments}
            setter={setDisplayComments}
            trueText="Hide Comments"
            falseText="Show Comments"
            />
            {displayComments ? <CommentSection comments={comments} /> : null}
        </div>
    )
}

export default VideoWidget;