import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IVideoPlayerProps } from './VideoPlayer.config';
import { BsFillPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';

const VideoPlayer: FC<IVideoPlayerProps> = ({
  autoPlay,
  loop,
  muted,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  //playPause button
  const VideoPlayPauseButton = () => {
    return (
      <button
        className={cn(
          'player-start',
          'p-2 m-1 rounded-full hover:bg-gray-400 flex justify-center items-center w-12 h-12',
        )}
      >
        {' '}
        {<BsFillPlayFill />}
      </button>
    );
  };
  //progress bar
  const ProgressBar = () => {
    return (
      <div className={cn('player-progress', 'grow gap-1')}>
        <input className={cn('player-input', 'w-full')} type="range" min="0" max="100" />
      </div>
    );
  };
  //volume slider
  const VolumeInput = () => {
    return (
      <div className={cn('player-volume-container ', 'flex group w-fit pr-4')}>
        <button
          className={cn(
            'player-volume-button',
            'items-center justify-center p-2 hover:bg-gray-400 block cursor-pointer relative  ',
          )}
        >
          <BsFillVolumeUpFill />
        </button>
        <input type="range" min={0} max={100} className={cn('player-volume-range', 'w-fit')} />
      </div>
    );
  };

  //duration div
  const DurationDiv = () => {
    const dur = '00:00 / 00:00';
    return <div className={cn('duration-container', 'p-2 w-50')}>{dur}</div>;
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className={cn('video-screen', 'w-full bg-slate-400 rounded-t-lg')}
      >
        <source src="" type="video/mp4" />
        <source src="" type="video/ogg" />
        Your browser does not support the video element.
      </video>
      <div
        style={style}
        className={cn('player-container', 'flex rounded-b-lg bg-gray-600 text-white text-xl')}
      >
        <VideoPlayPauseButton />
        <div className={cn('player-container', 'flex grow items-center justify-center gap-2 p-2')}>
          <ProgressBar />
          <DurationDiv />
        </div>
        <VolumeInput />
      </div>
    </div>
  );
};

export default VideoPlayer;
