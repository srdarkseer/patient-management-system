"use client";

import React, { useState } from "react";
import { CiChat1, CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

const DropdownMenuLabel = ({ htmlFor, children }: any) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

const Topbar = () => {
  return (
    <div className="fixed flex w-full items-center bg-accent px-8 py-4"></div>
  );
};

export default Topbar;
