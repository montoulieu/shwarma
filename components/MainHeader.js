import Image from 'next/image';

function MainHeader() {
  return (
    <div className="text-white text-center mb-auto py-8">
      <Image
        src="/images/logo-shwarma.png"
        height="81px"
        width="160px"
        alt="melted shwarma logo"
      />
    </div>
  );
}

export default MainHeader;
