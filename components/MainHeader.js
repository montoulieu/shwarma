import Image from 'next/image';

function MainHeader() {
  return (
    <div className="text-white text-center mb-auto py-8">
      <Image
        src="/images/logo-shwarma.png"
        height="101px"
        width="180px"
        alt="melted shwarma logo"
      />
    </div>
  );
}

export default MainHeader;
