import React, { useState } from "react";

export default function useSidebarToggle() {
  const [sidebarShow, setSidebarShow] = useState(true);

  const sidebarToggleFn = () => {
    setSidebarShow(!sidebarShow);
  };

  return { sidebarShow, sidebarToggleFn };
}
