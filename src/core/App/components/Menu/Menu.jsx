import React, {
  useContext, useEffect, useRef, useState,
} from 'react';

import { ThemeContext } from 'styled-components';

import { ResizeContext } from 'src/core/UserMotion';

import { MenuItem } from './components';
import {
  MenuHomeIcon, MenuRoundButton, MenuButtonWrapper, MenuBackground, CloseButtonIcon, MenuNavList, Copyright, ExternalLink, ExternalLinks, CopyrightText, CopyrightSymbol,
} from './Menu.styled';

export const Menu = () => {
  const menuButtonWrapperRef = useRef();
  const menuRoundButtonRef = useRef();

  const resizeContext = useContext(ResizeContext);

  const { blockScreen, setBlockScreen } = useContext(ThemeContext);

  const [opened, setOpened] = useState(false);

  // Clicking on background closes the Menu
  const handleBackgroundClick = () => setOpened(false);

  // Menu Buttons acts as a toggle
  const handleMenuButtonClick = () => setOpened(!opened);

  // Clicking on Menu Item closes it aswell
  const handleMenuItemClick = () => setOpened(false);

  // Touch events handler
  const handleTouch = (event) => {
    if (opened) {
      event.preventDefault();
    }
  };

  // If Menu is opened, we make sure block screen is enabled
  useEffect(() => {
    if (opened) {
      setBlockScreen(opened);
    }

    // We also care about disabling it
    return () => setBlockScreen(false);
  }, [opened, blockScreen]);

  // Pressing "Esc" key closes Menu too
  useEffect(() => {
    if (!opened || resizeContext.mobile) {
      return;
    }

    const handleEscapeButtonClick = ({ key }) => {
      if (key !== 'Escape') {
        return;
      }

      setOpened(false);
    };

    window.addEventListener('keydown', handleEscapeButtonClick);

    return () => window.removeEventListener('keydown', handleEscapeButtonClick);
  }, [opened, resizeContext.mobile]);

  // We prevent touch events from scrolling the window when menu is opened
  useEffect(() => {
    if (!resizeContext.mobile || !resizeContext.tablet) {
      return;
    }

    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('touchcancel', handleTouch);
    window.addEventListener('touchend', handleTouch);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchcancel', handleTouch);
      window.removeEventListener('touchend', handleTouch);
    };
  }, [resizeContext.mobile, resizeContext.tablet]);

  const buttonHeight = menuButtonWrapperRef.current ? menuButtonWrapperRef.current.getBoundingClientRect().height : 0;

  return (
    <>
      {opened && (
        <MenuBackground onClick={handleBackgroundClick} />
      )}

      <MenuButtonWrapper ref={menuButtonWrapperRef} onClick={handleMenuButtonClick}>
        <MenuRoundButton ref={menuRoundButtonRef} enableHover={resizeContext.laptop || resizeContext.desktop}>
          <CloseButtonIcon style={{ opacity: opened ? 1 : 0 }} alt="Cross Icon" />
          <MenuHomeIcon style={{ opacity: !opened ? 1 : 0 }} alt="Home Icon" />
        </MenuRoundButton>

        {opened && (
          <MenuNavList buttonHeight={buttonHeight}>
            <MenuItem onClick={handleMenuItemClick} title="Samples" to="samples" />
            <MenuItem onClick={handleMenuItemClick} title="Pics" to="pictures" />
            <MenuItem onClick={handleMenuItemClick} title="Home" to="/" />
          </MenuNavList>
        )}

        {opened && (
          <Copyright>
            <CopyrightText>
              {new Date().getFullYear()}
              <CopyrightSymbol>
                &copy;
              </CopyrightSymbol>
              all rights reserved
            </CopyrightText>

            <ExternalLinks>
              <ExternalLink href="https://github.com/kobzzz/kobzkobzkobzkobz.com" target="_blank">
                GitHub
              </ExternalLink>

              <ExternalLink href="https://www.facebook.com/evgenykobz" target="_blank">
                Facebook
              </ExternalLink>

              <ExternalLink href="https://www.instagram.com/kobzkobzkobzkobz/" target="_blank">
                Instagram
              </ExternalLink>
            </ExternalLinks>
          </Copyright>
        )}
      </MenuButtonWrapper>
    </>
  );
};
