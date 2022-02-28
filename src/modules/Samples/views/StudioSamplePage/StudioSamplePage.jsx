import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useOutletContext } from 'react-router-dom';
import {
  Scene, PerspectiveCamera, WebGLRenderer, sRGBEncoding,
  Vector3, Color, Clock, HemisphereLight, SpotLight,
  PCFSoftShadowMap,
} from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { ItalicText } from 'src/constants/';
import { FILL_VARIANTS } from 'src/core/App/components/Header/Header.constants';

import { ContentWrapper } from '../../components';
import { errorMessagesByType } from '../../components/SampleWrapper/SampleWrapper.constants';
import Model from './assets/model.glb';

const initialCameraPosition = new Vector3(-7.856, 20.828, -4.662);
const targetCameraPosition = new Vector3(-6.516, 20.980, -4.775);

const initialCameraTargetPosition = new Vector3(-37.122, 29.595, -17.050);
const targetCameraTargetPosition = new Vector3(-8.435, 21.085, -4.843);

export const StudioSamplePage = () => {
  const {
    onModelLoaded, onShowInfo, onError,
  } = useOutletContext();

  const cameraPositionAlphaValue = useRef(0.02);

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

    if (controls) {
      controls.update(clock.getDelta());
    }

    if (camera) {
      if (cameraPositionAlphaValue.current >= 0.5) {
        onShowInfo(true);
        return;
      }

      camera.position.lerp(targetCameraPosition, cameraPositionAlphaValue.current);
      camera.lookAt(targetCameraTargetPosition, cameraPositionAlphaValue.current);
      camera.updateProjectionMatrix();

      cameraPositionAlphaValue.current += 0.02;
    }

    if (renderer && controlsEnabled) {
      renderer.render(scene, camera);
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

    camera.position.copy(initialCameraPosition);
    const vector = new Vector3(0, 0, -1);
    vector.applyEuler(camera.rotation, camera.rotation.order);
    camera.getWorldDirection(vector);
    camera.lookAt(initialCameraTargetPosition);
    camera.updateProjectionMatrix();

    setControls(new FirstPersonControls(camera, renderer.domElement));
  }, [camera]);

  useEffect(() => {
    if (!controls) {
      return;
    }

    controls.lookVertical = true;
    controls.enabled = true;
    controls.lookSpeed = 0.2;
    controls.movementSpeed = 2;
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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor(new Color(0x76d5fc));
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

        const spotLight = new SpotLight(new Color(0xffffff));
        spotLight.position.set(-13.026, 22.875, -2.443);
        spotLight.shadow.mapSize.width = 2048 * 2;
        spotLight.shadow.mapSize.height = 2048 * 2;
        spotLight.target.position.set(-11.218, 22.176, -4.372);
        spotLight.target.updateMatrixWorld();
        spotLight.intensity = 5;
        spotLight.castShadow = true;
        scene.add(spotLight);

        const hemisphereLight = new HemisphereLight(new Color(0xB1E1FF), new Color(0xffffff), 0.5);
        scene.add(hemisphereLight);

        onModelLoaded(FILL_VARIANTS.white);
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
      title="studio"
      subtitle="ek2111s2"
      Description={(
        <>
          My lovely studio &#8212; located on the third floor of a historical building just minutes of walk from the city centre.&nbsp;
          Despite the fact that studio space nowadays is considered a
          &nbsp;
          <ItalicText>chose démodé</ItalicText>
          ,
          &nbsp;
          <ItalicText>bobo</ItalicText>
          &nbsp;
          kind of thing, I believe I could not make it as an artist without a space where I can a) experiment without my landlord bitting the sh-t out of me and b) change the perspective and concentrate.&nbsp;
          However, as the time flies, many things are going to change as well as my relations with this place, I guess.&nbsp;
          So for now I would like to save it the way it usually feels on a sunny day: spirited, vibrant and inviting to work.
        </>
      )}
    />
  );
};
