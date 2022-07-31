import React from 'react';
import { useState } from 'react';

export const useMouseHover = () => {
  const DelayMouseHover = 1000;
  const [trigger,SetTrigger] = useState('');
  const [activVideo,SetActivVideo] = useState('');
  const MouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    SetTrigger(e.currentTarget.dataset.id as string);
  };
  const MouseOut: React.MouseEventHandler<HTMLElement> = (e) => {
    SetTrigger('0');
    SetActivVideo('0');
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      SetActivVideo(trigger);
    }, DelayMouseHover);
    return () => {
      clearTimeout(timer);
    };
  }, [trigger]);
  return {
    MouseOver,
    MouseOut,
    activVideo
  };
};
