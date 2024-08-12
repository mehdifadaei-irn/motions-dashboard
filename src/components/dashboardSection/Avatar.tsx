"use client";
import avatar from "@/assets/avatar.png";
import Image from "next/image";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, LogOut, Settings, User } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Avatar = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full overflow-clip cursor-pointer ">
          <Image src={avatar} alt="avatar" height={35} width={35} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 mr-5">
        <DropdownMenuLabel>Mehdi Fadaei</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              className="flex"
              target="_blank"
              href="https://github.com/mehdifadaei-irn"
            >
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              className="flex"
              target="_blank"
              href="https://www.linkedin.com/in/mehdi-fada-yi-471746249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>Linkedin </span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Avatar;
