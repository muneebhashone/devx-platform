import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const ProfileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center space-x-6 text-content hover:bg-secondary transition-colors duration-200 p-2 cursor-pointer rounded-[50%]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-primary border-secondary rounded-lg shadow-lg p-2 transform -translate-x-[0]">
        <div className="space-y-2">
          <Link href="/profile">
            <Button className="w-full flex items-center justify-start px-3 py-2 text-sm text-white hover:bg-secondary rounded-md transition-colors duration-200">
              <User className="h-4 w-4 mr-3" />
              Profile
            </Button>
          </Link>
          <Link href="/settings">
            <Button className="w-full flex items-center justify-start px-3 py-2 text-sm text-white hover:bg-secondary rounded-md transition-colors duration-200">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Button>
          </Link>
          <hr className="border-secondary my-2" />
          <Button className="w-full flex items-center justify-start px-3 py-2 text-sm text-red-400 hover:bg-red-900 hover:text-red-300 rounded-md transition-colors duration-200">
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileMenu;
