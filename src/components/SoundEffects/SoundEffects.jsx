import React from 'react';

const AudioPlayer = ({ id, src }) => <audio id={id} src={src}></audio>;

const SoundEffects = () => (
  <>
    <AudioPlayer id="on_sound" src="../sounds/on_sound.mp3" />
    <AudioPlayer id="off_sound" src="../sounds/off_sound.mp3" />
    <AudioPlayer id="start_sound" src="../sounds/pokemon_title_song.mp3" />
    <AudioPlayer id="fight_sound" src="../sounds/fight_sound.mp3" />
    <AudioPlayer id="defeat_sound" src="../sounds/defeat.wav" />
    <AudioPlayer id="win_sound" src="../sounds/youwin.mp3" />
    <AudioPlayer id="click_sound" src="../sounds/click_in_button.mp3" />
    {/* <audio id="fight_sound" src="../sounds/click_in_button.mp3"></audio> */}
  </>
);

export default SoundEffects;
