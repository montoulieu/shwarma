import Image from 'next/image';

function MainHeader() {
  return (
    <div className="flex items-center text-white mb-auto py-8 relative">
      <div
        className="mx-auto"
      >
        <Image
          src="/images/logo-shwarma.png"
          height="101px"
          width="180px"
          alt="melted shwarma logo"
        />
      </div>
    </div>
  );
}

export default MainHeader;
