import React, {
  useCallback, useEffect, useState,
} from 'react';

import { useOutletContext } from 'react-router-dom';
import {
  Scene, PerspectiveCamera, WebGLRenderer, sRGBEncoding,
  Vector3, Clock, HemisphereLight, Color,
} from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { ItalicText } from 'src/constants/styles';
import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';

import { ContentWrapper } from '../../components';
import { errorMessagesByType } from '../../components/SampleWrapper/SampleWrapper.constants';
import Model from './assets/model.glb';

export const SeelenlustSamplePage = () => {
  const { onModelLoaded, onShowInfo, onError } = useOutletContext();

  const [scene, setScene] = useState();
  const [camera, setCamera] = useState();
  const [controls, setControls] = useState();
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [clock, setClock] = useState();
  const [renderer, setRenderer] = useState();
  const [dracoLoader, setDracoLoader] = useState();
  const [gltfLoader, setGltfLoader] = useState();

  // Animation function
  const animate = () => {
    requestAnimationFrame(animate);

    if (renderer && controlsEnabled) {
      renderer.render(scene, camera);
    }

    if (controls) {
      controls.update(clock.getDelta());
    }
  };

  const canvasCallbackRef = useCallback(async (node) => {
    if (!node) {
      return;
    }

    // Three.js initialisation
    setScene(new Scene());
    setCamera(new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100));
    setRenderer(new WebGLRenderer({ antialias: true, canvas: node }));
    setClock(new Clock());

    // Loaders setup
    setDracoLoader(new DRACOLoader());
    setGltfLoader(new GLTFLoader());
  }, []);

  // Effect sets up camera with position and direction
  useEffect(() => {
    if (!camera) {
      return;
    }

    camera.position.x = 0.857;
    camera.position.y = -0.251;
    camera.position.z = -0.546;

    const vector = new Vector3(0, 0, -1);
    vector.applyEuler(camera.rotation, camera.rotation.order);
    camera.getWorldDirection(vector);
    camera.lookAt(-0.47, 0.68, -0.546);

    camera.updateProjectionMatrix();

    setControls(new FirstPersonControls(camera, renderer.domElement));
  }, [camera]);

  useEffect(() => {
    if (!controls) {
      return;
    }

    controls.lookVertical = true;
    controls.enabled = true;
    controls.lookSpeed = 0.1;
    controls.movementSpeed = 1;
  }, [controls]);

  useEffect(() => {
    if (!controls) {
      return;
    }

    controls.enabled = controlsEnabled;
  }, [controlsEnabled]);

  // Effect updates renderer with custom properties
  useEffect(() => {
    if (!renderer) {
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.alpha = true;
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = sRGBEncoding;
  }, [renderer]);

  // Effect sets up Draco loader
  useEffect(() => {
    if (!dracoLoader) {
      return;
    }

    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
    dracoLoader.setDecoderConfig({ type: 'js ' });
  }, [dracoLoader]);

  // Effect loads our .GLB model and sets up lights,
  // model properties when the file is loaded. On success it calls
  // "animate" function
  useEffect(() => {
    if (!gltfLoader || !dracoLoader || !controls) {
      return;
    }

    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(Model, (instance) => {
      try {
        const model = instance.scene;
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        scene.add(model);

        const hemisphereLight = new HemisphereLight(new Color(0x425A7C), new Color(0x929DA1), 1);
        scene.add(hemisphereLight);

        onModelLoaded(FILL_VARIANTS.black);
        onShowInfo(true);
        animate();
        setControlsEnabled(false);
      } catch (error) {
        onError(errorMessagesByType.unhandledException);
      }
    }, undefined, () => onError(errorMessagesByType.unhandledException));
  }, [gltfLoader, dracoLoader, controls]);

  // Effect makes a clean-up when user leaves the page
  useEffect(() => () => {
    if (renderer) {
      renderer.dispose();
    }

    if (controls) {
      controls.dispose();
    }

    if (scene) {
      scene.dispose();
    }

    if (camera) {
      camera.dispose();
    }
  }, []);

  // Effect inits an "onresize" loader to update camera and renderer
  useEffect(() => {
    const handleResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }

      if (renderer) {
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      if (controls) {
        controls.handleResize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [camera, renderer, controls]);

  return (
    <ContentWrapper
      ref={canvasCallbackRef}
      canvasStyle={{
        background: 'linear-gradient(180deg, #929DA1 0%, #425A7C 100%)',
      }}
      title="seelenlust"
      subtitle="ek2110s6"
      Description={(
        <>
          I used to run deep into the woods near my grannyr&#39;s place when I was a kid.&nbsp;
          I recall vividly the old oak tree standing &#8212; as if guarding &#8212; behind the forest entry.&nbsp;
          Years passed, I have seen it no more, but it still lingers in my mind.&nbsp;
          I have no photo of it as I apparently was too young to possess a digital camera.&nbsp;
          I decided to make a Sample of this tree so it will stay forever and remind me of those days.&nbsp;
          <ItalicText>Only this and nothing more.</ItalicText>
        </>
      )}
    />
  );
};
