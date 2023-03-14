import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg"
import Contatcts from './Contatcts';

export const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-x-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500"> 
            <p className="flex text-lg font-semibold flex-grow">Contacts</p>
            <div className="flex space-x-1 px-2">
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <RiVideoAddFill/>
                </div>
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <BiSearch/>
                </div>
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
        <Contatcts src="https://images.pexels.com/photos/14454924/pexels-photo-14454924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Cleber Dev" status="Online"/>
        <Contatcts src="https://images.pexels.com/photos/14454924/pexels-photo-14454924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Elano Dev" status="Online"/>
        <Contatcts src="https://images.pexels.com/photos/14454924/pexels-photo-14454924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Rogeria Dev" status="Offline"/>
    </div>
  )
}
