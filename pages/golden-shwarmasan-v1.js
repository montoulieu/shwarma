import React from "react";

const GoldenShwarmasanV1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center text-yellow-300 max-w-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-gold.png"
          alt="shwarma logo"
          className="mb-4 w-72 mx-auto"
        />
        <h1 className="">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The Golden Shwarmasan and it's knowledge has been bestowed upon you.
        </h1>
        <img
          src="https://f4.bcbits.com/img/a2255511248_10.jpg"
          alt="borgles"
          className="rounded-xl my-5"
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
      </div>
    </div>
  );
};

export default GoldenShwarmasanV1;
