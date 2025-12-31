import Image from "next/image";

const GoldenShwarmasanV1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center text-yellow-300 max-w-sm">
        <Image
          src="/images/logo-gold.png"
          alt="shwarma logo"
          width={288}
          height={100} // Approximate height based on width
          className="mb-4 w-72 mx-auto"
          style={{ height: "auto" }}
        />
        <h1 className="">
          The Golden Shwarmasan and it&apos;s knowledge has been bestowed upon
          you.
        </h1>
        <Image
          src="https://f4.bcbits.com/img/a2255511248_10.jpg"
          alt="borgles"
          width={384}
          height={384}
          className="rounded-xl my-5 mx-auto"
        />
        <p className="text-2xl font-bold">
          Prepare for our next release, Cheeseborgle EP!
        </p>
        <p className="text-2xl">Out 5/29/23!</p>
        <p className="text-xl">
          Thanks for your support! Send a shipping address to{" "}
          <a href="mailto:shwarmaband@gmail.com" className="underline">
            our email
          </a>{" "}
          for a free copy of the CD!
        </p>
      </div>
    </div>
  );
};

export default GoldenShwarmasanV1;
