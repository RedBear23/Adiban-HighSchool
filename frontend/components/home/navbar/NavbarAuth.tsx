"use client";

import { useState } from "react";

import { LoginModal } from "@/components/auth/LoginModal";
import { RegisterModal } from "@/components/auth/RegisterModal";

import NavbarUser from "./NavbarUser";

export default function NavbarAuth() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function openLogin() {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  function openRegister() {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  }

  function closeModals() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  }

  return (
    <>
      <NavbarUser
        onLogin={openLogin}
        onRegister={openRegister}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeModals}
        onRegister={openRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeModals}
        onLogin={openLogin}
      />
    </>
  );
}