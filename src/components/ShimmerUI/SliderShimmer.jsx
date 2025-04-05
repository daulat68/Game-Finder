import "../styles/ImageSlider.css"

const SliderShimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-card">
        <div className="shimmer-image"></div>
        <div className="shimmer-title"></div>
        <div className="shimmer-detail"></div>
        <div className="shimmer-thumbnail-row">
          <div className="shimmer-thumbnail"></div>
          <div className="shimmer-thumbnail"></div>
          <div className="shimmer-thumbnail"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderShimmer;
