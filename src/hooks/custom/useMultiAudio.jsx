import { useRef, useState, useCallback, useEffect } from 'react';

const useMultiAudio = (audioFiles) => {
  const [musicOff, setMusicOff] = useState(false);
  const audioRefs = useRef(
    audioFiles.reduce((acc, file) => {
      acc[file.id] = new Audio(file.src);
      return acc;
    }, {})
  );

  const playAudio = useCallback(
    (id) => {
      if (!musicOff && audioRefs.current[id]) {
        audioRefs.current[id].play();
      }
    },
    [musicOff]
  );

  const pauseAudio = useCallback((id) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].pause();
      audioRefs.current[id].currentTime = 0;
    }
  }, []);

  const setLoop = (id, loop) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].loop = loop;
    }
  };

  const toggleMusic = useCallback(() => {
    setMusicOff((prev) => {
      if (prev) {
        playAudio('start_sound');
      } else {
        audioFiles.forEach((file) => {
          if (file.id !== 'click_sound' && audioRefs.current[file.id]) {
            audioRefs.current[file.id].pause();
            audioRefs.current[file.id].currentTime = 0;
          }
        });
      }
      return !prev;
    });
  }, [audioFiles]);

  // useEffect(() => {
  //   if (musicOff) {
  //     audioFiles.forEach((file) => {
  //       if (file.id !== 'click_sound') {
  //         pauseAudio(file.id);
  //       }
  //     });
  //   }
  // }, [musicOff, audioFiles, pauseAudio]);

  return { playAudio, pauseAudio, setLoop, toggleMusic, musicOff };
};

export default useMultiAudio;
