import { useState } from 'react';

export const useMouseHover = () => {
  const [activVideo,SetActivVideo] = useState('');
  const MouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    SetActivVideo(e.currentTarget.dataset.id as string);
  };
  const MouseOut: React.MouseEventHandler<HTMLElement> = (e) => {
    SetActivVideo(e.currentTarget.dataset.id as string);
  };
  return {
    MouseOver,
    MouseOut,
    activVideo
  };
};
