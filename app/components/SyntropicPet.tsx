'use client';

import { useEffect, useState, type CSSProperties } from 'react';

type PetMode = 'idle' | 'walk-right' | 'walk-left' | 'waving' | 'jumping' | 'waiting' | 'running' | 'review';

type PetFrame = {
  row: number;
  frames: number;
  interval: number;
};

type PetPosition = {
  x: number;
  y: number;
};

const petFrames: Record<PetMode, PetFrame> = {
  idle: { row: 0, frames: 6, interval: 190 },
  'walk-right': { row: 1, frames: 8, interval: 125 },
  'walk-left': { row: 2, frames: 8, interval: 125 },
  waving: { row: 3, frames: 4, interval: 210 },
  jumping: { row: 4, frames: 5, interval: 145 },
  waiting: { row: 6, frames: 6, interval: 190 },
  running: { row: 7, frames: 6, interval: 165 },
  review: { row: 8, frames: 6, interval: 185 },
};

const smallActions: PetMode[] = ['waving', 'jumping', 'waiting', 'running', 'review'];

function randomBetween(min: number, max: number) {
  return min + Math.random() * Math.max(0, max - min);
}

function randomPosition(): PetPosition {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const minimumX = Math.min(64, width / 2);
  const maximumX = Math.max(minimumX, width - minimumX);
  const minimumY = Math.min(140, height / 2);
  const maximumY = Math.max(minimumY, height - 24);

  return {
    x: randomBetween(minimumX, maximumX),
    y: randomBetween(minimumY, maximumY),
  };
}

export default function SyntropicPet() {
  const [mode, setMode] = useState<PetMode>('idle');
  const [frame, setFrame] = useState(0);
  const [position, setPosition] = useState<PetPosition>({ x: 0, y: 0 });
  const [moveDuration, setMoveDuration] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initialPosition = randomPosition();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = new Set<number>();
    let currentPosition = initialPosition;

    const setNextPosition = (nextPosition: PetPosition) => {
      currentPosition = nextPosition;
      setPosition(nextPosition);
    };

    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
    };

    const pause = () => {
      setMode('idle');
      setMoveDuration(0);
      schedule(startNextMoment, randomBetween(2600, 6800));
    };

    const startNextMoment = () => {
      if (Math.random() < 0.64) {
        const nextPosition = randomPosition();
        const distance = Math.hypot(nextPosition.x - currentPosition.x, nextPosition.y - currentPosition.y);
        const duration = Math.max(3200, Math.min(8000, distance * 17));
        setMoveDuration(duration);
        setMode(nextPosition.x >= currentPosition.x ? 'walk-right' : 'walk-left');
        setNextPosition(nextPosition);
        schedule(pause, duration + 250);
        return;
      }

      const action = smallActions[Math.floor(Math.random() * smallActions.length)];
      setMode(action);
      setMoveDuration(0);
      schedule(pause, randomBetween(1300, 2500));
    };

    schedule(() => {
      setNextPosition(initialPosition);
      setReady(true);
    }, 0);

    if (!reducedMotion) {
      schedule(startNextMoment, randomBetween(3200, 6200));
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const animation = petFrames[mode];
    const interval = window.setInterval(() => {
      setFrame((currentFrame) => (currentFrame + 1) % animation.frames);
    }, animation.interval);

    return () => window.clearInterval(interval);
  }, [mode]);

  const animation = petFrames[mode];
  const visibleFrame = frame % animation.frames;
  const spriteStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    '--sprite-x': `${(visibleFrame / 7) * 100}%`,
    '--sprite-y': `${(animation.row / 10) * 100}%`,
    '--move-duration': `${moveDuration}ms`,
  } as CSSProperties;

  return (
    <div
      className="syntropic-pet"
      data-pet-name="Syntropic Seeker of Truth"
      data-state={mode}
      data-ready={ready}
      aria-hidden="true"
      style={spriteStyle}
    />
  );
}
