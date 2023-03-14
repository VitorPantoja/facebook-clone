import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
// import React, { useState, useEffect } from 'react';

const Post = () => {
    const date = new Date();
    // const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     const timerID = setInterval(() => {
    //       setDate(new Date());
    //     }, 1000);
    
    //     return () => {
    //       clearInterval(timerID);
    //     };
    //   }, []);
  return (
    <div className="flex flex-col">
        <div className="bg-white mt-6 rounded-md p-4">
            <div className="flex items-center space-x-2">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                className="rounded-full w-10 h-10"/>
                <div>
                    <p className="font-medium">Cleber Dev</p>
                    <p className="text-xs text-gray-500">{date.toLocaleDateString()}, {date.getUTCHours()}:{date.getUTCMinutes()}</p>
                </div>
            </div>
            <p className="py-4">Lore ipsum</p>
        </div>
        {/* If Any image*/}
        <div className="relative h-60 md:h-96 bg-white">
            <Image src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill style={{objectFit:"cover"}}/>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center bg-white p-2">
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p2 rounded-xl cursor-pointer">
                <FiThumbsUp className="h-4"/>
                <p className="text-xs sm:text-base" >Like</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p2 rounded-xl cursor-pointer">
                <FaRegCommentAlt className="h-4"/>
                <p className="text-xs sm:text-base" >Comment</p>
            </div>
            <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p2 rounded-xl cursor-pointer">
                <RiShareForwardLine className="h-4"/>
                <p className="text-xs sm:text-base" >Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post;