import { Menu } from "@headlessui/react";
import React from 'react';

const AddProduct = () => {   
  return (
    <>

        <Menu>
        <Menu.Button className="text-white block p-2 mx-[8px] text-[14px] w-[100px] border border-white border-solid">Add Listing +</Menu.Button>
        <Menu.Items className="absolute bottom-[-140%] bg-[#fd6728] ps-[1rem] pe-[2rem] rounded-b-[12px]">
          <Menu.Item>
            {({ active }) => (
              <a
                className="inline-block py-3 text-white font-[500]"
                href="/marketplace/dashboard/addlisting"
              >
                Classifieds
              </a>
            )}
          </Menu.Item> <br />
          <Menu.Item>
            {({ active }) => (
              <a
                className="inline-block py-3 text-white font-[500]"
                href="/marketplace/dashboard/addproperty"
              >
                Real Estate
              </a>
            )}
          </Menu.Item> <br />

          <Menu.Item>
            {({ active }) => (
              <a
                className="inline-block py-3 text-white font-[500]"
                href="/marketplace/dashboard/addautomotive"
              >
                Automotive
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
        </Menu>
    </>
  );
};

export default AddProduct;






