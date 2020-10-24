import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    cssModule={AwesomeSliderStyles}
  >
    <div data-src="/path/to/image-0.jpg" />
    <div data-src="/path/to/image-1.jpg" />
    <div data-src="/path/to/image-2.jpg" />
    <div data-src="/path/to/image-3.jpg" />
  </AutoplaySlider>
);

export default Slider