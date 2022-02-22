import React, {
  useContext, useEffect, useState,
} from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import WebGL from 'three/examples/jsm/capabilities/WebGL';

import { HeaderContext, FILL_VARIANTS } from 'src/core/App/components/Header';

import { LogoLoader } from '../LogoLoader';
import { errorMessagesByType } from './SampleWrapper.constants';
import { Loader, ErrorWrapper } from './SampleWrapper.styled';

// TODO:
// 1. Smooth transition
// 2. Error markup
export const SampleWrapper = () => {
  const { setVariant, setMini } = useContext(HeaderContext);
  const { setBlockScreen, blockScreen } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { pathname } = useLocation;

  // If a scene is successfully loaded, we need to set logo and remove block screen setting
  const handleOnLoaded = (logoVariant = FILL_VARIANTS.default) => {
    setLoading(false);
    setVariant(logoVariant);
    setMini(true);
  };

  const handleOnError = (errorMessage) => {
    setError(errorMessage);
  };

  useEffect(() => {
    // We have to check if WebGL is supported on our initial render
    // so we can show an error message
    if (!WebGL.isWebGLAvailable()) {
      handleOnError(errorMessagesByType.notSupported);
    }

    // When user leaves the page, we need to reset both
    // header and block screen to its default values
    return () => {
      setVariant(FILL_VARIANTS.default);
      setBlockScreen(false);
      setMini(false);
    };
  }, []);

  useEffect(() => {
    setBlockScreen(true);

    return () => setBlockScreen(false);
  }, [blockScreen]);

  // We reset loading, error and header states every time user leaves the page
  useEffect(() => {
    setLoading(true);
    setError();
  }, [pathname]);

  return (
    <>
      {loading && (
        <Loader>
          <LogoLoader />
        </Loader>
      )}

      {error && <ErrorWrapper />}

      <Outlet context={{
        loaded: !loading && !error,
        onLoaded: handleOnLoaded,
        onError: handleOnError,
      }}
      />
    </>
  );
};
