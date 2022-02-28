import React, {
  useContext, useEffect, useState,
} from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import WebGL from 'three/examples/jsm/capabilities/WebGL';

import { Button } from 'src/components';
import { HeaderContext, FILL_VARIANTS } from 'src/core/App/components';

import { LogoLoader } from './components';
import { errorMessagesByType } from './SampleWrapper.constants';
import {
  Loader, ErrorWrapper, ErrorText,
} from './SampleWrapper.styled';

/**
 * @function SampleWrapper
 * Component renders Nested Routes and
 * provides state for them via Outlet Context
 */
export const SampleWrapper = () => {
  const { pathname } = useLocation();

  const { setVariant, setMini } = useContext(HeaderContext);
  const { setBlockScreen, blockScreen } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState();

  // If a scene is successfully loaded, we need to set logo and remove block screen setting
  const handleModelLoaded = (logoVariant = FILL_VARIANTS.default) => {
    setLoading(false);
    setVariant(logoVariant);
    setMini(true);
  };

  const handleOnError = (errorMessage) => {
    setError(errorMessage);
    setLoading(false);
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
      setMini(false);
      setLoading(true);
      setShowInfo(false);
    };
  }, [pathname]);

  useEffect(() => {
    setBlockScreen(true);

    return () => setBlockScreen(false);
  }, [blockScreen]);

  return (
    <>
      {loading && (
        <Loader>
          <LogoLoader />
        </Loader>
      )}

      {error && (
        <ErrorWrapper>
          <ErrorText>
            {error}
          </ErrorText>

          <Button to="../">
            Back to Samples
          </Button>
        </ErrorWrapper>
      )}

      <Outlet context={{
        modelLoaded: !loading && !error,
        showInfo,
        onShowInfo: setShowInfo,
        onModelLoaded: handleModelLoaded,
        onError: handleOnError,
      }}
      />
    </>
  );
};
