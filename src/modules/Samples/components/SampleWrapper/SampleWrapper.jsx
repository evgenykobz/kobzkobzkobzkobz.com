import React, {
  useContext, useEffect, useState,
} from 'react';

import { Outlet } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import WebGL from 'three/examples/jsm/capabilities/WebGL';

import { Button } from 'src/components/Button';
import { HeaderContext, FILL_VARIANTS } from 'src/core/App/components/Header';

import { LogoLoader } from '../LogoLoader';
import { errorMessagesByType } from './SampleWrapper.constants';
import {
  Loader, ErrorWrapper, ErrorText,
} from './SampleWrapper.styled';

// TODO:
// 1. Smooth transition
export const SampleWrapper = () => {
  const { setVariant, setMini } = useContext(HeaderContext);
  const { setBlockScreen, blockScreen } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // If a scene is successfully loaded, we need to set logo and remove block screen setting
  const handleOnLoaded = (logoVariant = FILL_VARIANTS.default) => {
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
    };
  }, []);

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
        loaded: !loading && !error,
        onLoaded: handleOnLoaded,
        onError: handleOnError,
      }}
      />
    </>
  );
};
