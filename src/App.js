import React, { useState, useEffect } from 'react';
// import faker, { lorem } from 'faker';
import Video from './Video';
import './App.css';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);
  const videosCollection = db.collection('videos').limit(4);
  useEffect(() => {
    // videosCollection.get().then((e) => {
    //   setVideos(e.docs.map((doc) => doc.data()));
    // });
    videosCollection.onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
    // videosCollection.add({
    //   url: 'test_video.mp4',
    //   channel: `@${faker.name.findName()}`,
    //   song: faker.music.genre(),
    //   likes: faker.random.number(),
    //   description: lorem.sentence(),
    //   shares: faker.random.number(),
    //   messages: faker.random.number(),
    // });
  }, [videosCollection]);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
              key={likes}
            ></Video>
          )
        )}
      </div>
    </div>
  );
}

export default App;
