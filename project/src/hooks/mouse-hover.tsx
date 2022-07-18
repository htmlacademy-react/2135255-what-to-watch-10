import { useState } from 'react';

export const MouseHover = () => {
  const [PlayVideo,SetPlayVideo] = useState('');
  const MouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    SetPlayVideo(e.currentTarget.dataset.id as string);
  };
  const MouseOut: React.MouseEventHandler<HTMLElement> = (e) => {
    SetPlayVideo(e.currentTarget.dataset.id as string);
  };
  return {
    MouseOver,
    MouseOut,
    PlayVideo
  };
};
