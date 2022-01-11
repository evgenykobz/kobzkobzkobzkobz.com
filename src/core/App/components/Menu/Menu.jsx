import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';

import { MenuStyled } from './Menu.styled';

const MENU_INITIAL_POSITION = 50;
const MENU_TARGET_POSITION = 300;
const TOUCH_INITIAL_VALUE = 0;
const TOUCH_TARGET_VALUE = 200;

export const Menu = () => {
  const menuRef = useRef();
  const [position, setPosition] = useState(MENU_INITIAL_POSITION);
  const [initialY, setInitialY] = useState(TOUCH_INITIAL_VALUE);
  const [currentY, setCurrentY] = useState();
  const [touchActive, setTouchActive] = useState(false);
  const [opened, setOpened] = useState(false);

  const deltaY = useMemo(() => {
    if (Number.isNaN(initialY) || Number.isNaN(currentY)) {
      return;
    }

    return currentY - initialY;
  }, [initialY, currentY]);

  const handleTouchStart = ({ pageY }) => {
    console.log('touchstart: ', pageY);
    setInitialY(pageY);
    setTouchActive(true);
  };

  const handleTouchEnd = () => {
    setTouchActive(false);
  };

  const handleTouchCancel = () => {
    setTouchActive(false);
  };

  const handleTouchMove = ({ pageY }) => {
    console.log('touchmove: ', pageY);
    setCurrentY(pageY);
  };

  const handleTouch = (event) => {
    if (!menuRef.current) {
      return;
    }
    console.log('event: ', event);

    const { target, type } = event;

    if (target !== menuRef.current) {
      return;
    }

    switch (type) {
      case 'touchstart': {
        return handleTouchStart(event);
      }

      case 'touchmove': {
        return handleTouchMove(event);
      }

      case 'touchcancel': {
        return handleTouchCancel(event);
      }

      case 'touchend': {
        return handleTouchEnd(event);
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => () => {
    setInitialY(TOUCH_INITIAL_VALUE);
    setCurrentY();
  }, [touchActive]);

  useEffect(() => {
    if (!deltaY) {
      return;
    }

    console.log('deltaY: ', deltaY);

    if (deltaY < TOUCH_TARGET_VALUE) {
      return;
    }

    setPosition(MENU_TARGET_POSITION);
    setOpened(true);
  }, [deltaY]);

  useEffect(() => {
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('touchend', handleTouch);
    window.addEventListener('touchcancel', handleTouch);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchend', handleTouch);
      window.removeEventListener('touchcancel', handleTouch);
    };
  }, []);

  return (
    <>
      {/* <MenuBackground /> */}
      <MenuStyled ref={menuRef} style={{ bottom: position }}>menu</MenuStyled>
    </>
  );
};
