import React from "react";
import VideoWidget from "./VideoWidget.js";
import video from "../data/video";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoWidget
      title={video.title}
      embedUrl={video.embedUrl}
      views={video.views}
      createdAt={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      comments={video.comments}
      />
    </div>
  );
}

export default App;


/*


Q: Create component for entire video and all related contents?
(Comments, likes, video all within a shared parent component)
Sol: Yeah, it makes it easier to expand, just paste this master
video div anywhere and you've got the whole video setup


App
> VideoWidget
   > Content (Contains video, title and statistics)
   > IncrementButton
   > ShowHideButton
   > Comments
     > Comment



Feels a little inappropriate to use the word "VideoContainer", as it seems
like "container" has other implied meanings based on its usages elsewhere;
I do know that container is a valid word for what I'm describing, but
I don't want to imply that it has a certain function/behaves in a way
that it doesn't
Up: Using "VideoWidget" instead


Will be creating a component called IncrementButton that creates a button
that displays a number held in state that may be incremented by clicking
the button

Creating a highly resuable component "ShowHideButton" that takes some
input about which element it has reign over, what it's display text should
be and then functions as expected

An argument could be made to display the title and statistics as children
of "VideoWidget" like the buttons, but the title and statistics have a
different identity from the buttons within the application; The title and
statistics are both simply a display of unique information about the video,
whereas the buttons are interactible and their "content" (function) is
identical for any video being displayed



*/