import React, { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import { Avatar } from "@chakra-ui/avatar";
import { MdOutlineGroups } from "react-icons/md";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { ImCross } from "react-icons/im";

const Prrofile = () => {
  const [toggle, setToggle] = useState(true);
  const { selectedChat,user} = ChatState();
  const User=getSenderFull(user, selectedChat.users)

  const toggleClass = " transform translate-x-5";

  return (
    <>
    {selectedChat ?
      <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "24%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
    <div style={{display: "flex", flexDirection: "row",justifyContent:"space-between",}}>
      <div>Info Detail</div>
    </div>
    {!selectedChat.isGroupChat?
      <div style={{margin:5,textAlign:"center",}}>
      <Avatar
        size="xl"
        cursor="pointer"
        name={User.name}
        src={User.pic}
      />
      <div>{User.name}</div>
      <div>online</div>
      </div>
      :
      <div style={{margin:5,textAlign:"center",}}>
        <Avatar
        size="xl"
        cursor="pointer"
        name={User.name}
        src="https://icon-library.com/icon/group-icon-11.html"
      />
      <div>{selectedChat.chatName}</div>
        
      </div>
    }
    <div className="text-gray-500">
          <div className="py-2 text-gray-500">
            <h2>Setting</h2>
          </div>
          <div className="flex py-2 justify-between">
            <h2>Mute notification</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <h2>pinned</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <h2>Call/video call</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row",justifyContent:"space-around",marginTop:10}}>
                <button>
                        Report chat
                </button>
                <button>
                        Block
                </button>
        </div>
    </Box>
    :
      <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
      </Box>
    }
    </>
    
  );
};

export default Prrofile;