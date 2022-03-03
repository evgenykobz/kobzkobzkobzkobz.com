import React, {
  useCallback, useEffect, useState,
} from 'react';

import { useOutletContext } from 'react-router-dom';
import {
  Scene, PerspectiveCamera, WebGLRenderer, sRGBEncoding,
  Vector3, Clock, HemisphereLight, Color, SpotLight,
  PCFSoftShadowMap,
} from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';

import { ContentWrapper } from '../../components';
import { errorMessagesByType } from '../../components/SampleWrapper/SampleWrapper.constants';
import Model from './assets/model.glb';

export const AfternoonBeamsSamplePage = () => {
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

    camera.position.x = 9.001;
    camera.position.y = 2.570;
    camera.position.z = 2.236;

    const vector = new Vector3(0, 0, -1);
    vector.applyEuler(camera.rotation, camera.rotation.order);
    camera.getWorldDirection(vector);
    camera.lookAt(6.205, 7.811, -13.300);

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
    controls.movementSpeed = 5;
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

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
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

        const hemisphereLight = new HemisphereLight(new Color(0x797768), new Color(0x856F48), 1);
        scene.add(hemisphereLight);

        const spotLight = new SpotLight(new Color(0xfeffc1));
        spotLight.position.set(31.899, 19.554, -13.721);
        spotLight.shadow.mapSize.width = 2048 * 1.5;
        spotLight.shadow.mapSize.height = 2048 * 1.5;

        spotLight.target.position.set(12.243, 8.004, -14.035);
        spotLight.target.updateMatrixWorld();

        spotLight.intensity = 3;
        spotLight.castShadow = true;
        spotLight.shadow.camera.near = 0.1;
        spotLight.shadow.camera.far = 20;
        spotLight.shadow.camera.left = 20;
        spotLight.shadow.camera.bottom = -10;
        spotLight.shadow.camera.right = -20;
        spotLight.shadow.camera.top = 10;
        spotLight.shadow.bias = -0.005;
        scene.add(spotLight);

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
        background: 'linear-gradient(180deg, #797768 0%, #856F48 100%)',
      }}
      title="afternoon beams"
      subtitle="ek2201s3"
      Description={(
        <>
          It was an unusually bright day for Moscow in October.&nbsp;
          In the afternoon I decided to take a walk across a lovely block 15 mins by walk from my house.&nbsp;
          Probably, one more hour in and the sun filled the city with a magnificent dark orange glow.&nbsp;
          I remember vividly me standing in front of catholic church and wondering how green rooftops and window sills turned emerald, and how the overall building started to remind of tangerine &#8212; all that just with a little assistance from the Sun.&nbsp;
          And so the whole church became divine, luminous from the very top, not to say occult.&nbsp;
          I stood there for about half an hour as if participating in some concealed ceremony and then went on wandering as if to pretend that nothing happened.
        </>
      )}
    />
  );
};
