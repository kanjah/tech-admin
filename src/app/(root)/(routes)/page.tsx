"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@../../../hooks/use-store-model";
import { useEffect } from "react";


const SetupPage = () => {
  // triger the modal to open in this page
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  },[isOpen, onOpen])

  return null;
}

export default SetupPage;
