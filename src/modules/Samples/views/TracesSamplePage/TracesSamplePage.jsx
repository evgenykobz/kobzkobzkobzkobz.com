import React, {
  useCallback, useEffect, useState,
} from 'react';

import { useOutletContext } from 'react-router-dom';
import {
  Scene, PerspectiveCamera, WebGLRenderer, sRGBEncoding,
  Vector3, SpotLight, DirectionalLight, Color, Clock, AmbientLight,
} from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';

import { ContentWrapper } from '../../components';
import { errorMessagesByType } from '../../components/SampleWrapper/SampleWrapper.constants';
import Model from './assets/model.glb';

export const TracesSamplePage = () => {
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
    setCamera(new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000));
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

    camera.position.x = 0.85;
    camera.position.y = 0.85;
    camera.position.z = 1.65;

    const vector = new Vector3(0, 0, -1);
    vector.applyEuler(camera.rotation, camera.rotation.order);
    camera.getWorldDirection(vector);
    camera.lookAt(-4.5, 3, -4);

    camera.updateProjectionMatrix();

    setControls(new FirstPersonControls(camera, renderer.domElement));
  }, [camera]);

  useEffect(() => {
    if (!controls) {
      return;
    }

    controls.lookVertical = false;
    controls.enabled = false;
    controls.lookSpeed = 0.1;
    controls.movementSpeed = 0.5;
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
    renderer.setClearColor(0xEEEEEE);
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
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        scene.add(model);

        const spotLight = new SpotLight(0xffffff);
        spotLight.distance = 5;
        spotLight.intensity = 0.7;
        spotLight.angle = 0.15;
        spotLight.penumbra = 0.25;
        spotLight.decay = 1;
        spotLight.position.set(1.75, 2.85, 0.75);
        spotLight.target.position.set(-5, 1, 0);
        spotLight.target.updateMatrixWorld();
        scene.add(spotLight);

        const spotLightTwo = new SpotLight(0xffffff);
        spotLightTwo.copy(spotLight);
        spotLightTwo.position.set(1.75, 2.85, -1);
        spotLightTwo.target.position.set(-5, 0.25, -0.35);
        spotLightTwo.target.updateMatrixWorld();
        scene.add(spotLightTwo);

        const spotLightThree = new SpotLight(0xffffff);
        spotLightThree.copy(spotLight);
        spotLightThree.position.set(1.75, 2.85, -1);
        spotLightThree.target.position.set(2, 3, -2.5);
        spotLightThree.target.updateMatrixWorld();
        scene.add(spotLightThree);

        const ambientLight = new AmbientLight(new Color(0xffe889));
        ambientLight.intensity = 0.75;
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(new Color(0xffe889));
        directionalLight.position.set(2, 3.75, -1);
        directionalLight.intensity = 0.85;
        scene.add(directionalLight);

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
      title="traces"
      subtitle="ek2108s1"
      Description={(
        <>
          There is a street that I revisit when I go out on a casual walk.&nbsp;
          Every time I stumble upon it I sense as if I see people, cars and birds following that same route everyday.&nbsp;
          Routes that we all take act as effects of our presence; and so this trace-making activity is nothing but a form of carefulness about what other things exist around us.&nbsp;
          In this sample I reconstructed the realm where each human is just a trace triggering or, so to speak, revealing another form of vital.
        </>
      )}
    />
  );
};
