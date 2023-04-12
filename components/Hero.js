import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  //create a hero section consisting of a text blurb to the right of an image both the image and the  blurb must be positioned relative to there shared and individual container
  return (
    <section>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
          <div class="max-w-xl text-center lg:text-left">
            <div>
              <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                I am a short heading
              </p>
              <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                Use this paragraph to share information about your company or
                products. Make it engaging and interesting, and showcase your
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                brand's personality. Thanks for visiting our website!
              </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
              <a
                href="#"
                class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Get started
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
              >
                Learn more
                <span aria-hidden="true"> → </span>
              </a>
            </div>
          </div>
        </div>
        <div class="order-first block w-full mt-0 aspect-square lg:mt-0">
          <Image
            className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto"
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Student"
            height="719"
            width="1080"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
