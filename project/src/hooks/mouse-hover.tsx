import React from 'react';
import { useState } from 'react';

export const useMouseHover = () => {
  const [trigger,SetTrigger] = useState('');
  const [activVideo,SetActivVideo] = useState('');
  const MouseOver: React.MouseEventHandler<HTMLElement> = (e) => {
    SetTrigger(e.currentTarget.dataset.id as string);
  };
  const MouseOut: React.MouseEventHandler<HTMLElement> = (e) => {
    SetTrigger('0');
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      SetActivVideo(trigger);
    }, 1000);
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
