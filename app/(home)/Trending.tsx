import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
      <div className='flex items-center gap-3'>
        <div className='bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold'>TRENDING</div>
        <p className='text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ad deserunt soluta
          id.
        </p>
      </div>
    </section>
  );
};

export default Trending;
