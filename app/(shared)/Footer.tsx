import React from "react";

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, incidunt odit fuga iste
            quidem repellat cumque accusamus nemo!
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Random Link #1</p>
          <p className='my-5'>Random Link #2</p>
          <p className='my-5'>Random Link #3</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        {/* THIRD COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
