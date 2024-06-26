import { useRef } from 'react';

const useMultiAudio = (audioFiles) => {
  const audioRefs = useRef(
    audioFiles.reduce((acc, file) => {
      acc[file.id] = new Audio(file.src);
      return acc;
    }, {})
  );

  const playAudio = (id) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].play();
    }
  };

  const pauseAudio = (id) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].pause();
    }
  };

  const setLoop = (id, loop) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].loop = loop;
    }
  };

  return { playAudio, pauseAudio, setLoop };
};

export default useMultiAudio;
