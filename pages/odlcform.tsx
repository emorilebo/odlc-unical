import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import Odlcform from "@/components/Odlcform";

export default function odlcform() {
  return <div>
    <Odlcform/>
  </div>;
}
