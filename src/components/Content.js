import React from "react";

function Content({ title, embedUrl, views, createdAt}) {

    return (
        <div id="content-div">
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{title}</h1>
            <h4>{`${views} views | Created on ${createdAt}`}</h4>
        </div>
    )
}

export default Content;
