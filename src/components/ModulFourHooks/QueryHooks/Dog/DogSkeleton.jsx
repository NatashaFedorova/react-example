import ContentLoader from 'react-content-loader';

const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={480}
      height={320}
      viewBox="0 0 480 320"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="-15" y="-6" rx="2" ry="2" width="359" height="276" />
      <rect x="-9" y="290" rx="0" ry="0" width="205" height="24" />
    </ContentLoader>
  );
};

export default DogSkeleton;
