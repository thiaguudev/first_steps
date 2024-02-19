"use client";

import ButtonSignInGoogle from "@/components/ButtonSignInGoogle";
import ButtonSignInFacebook from "@/components/ButtonSignInFacebook";

export default function SignInForm() {

  return (
    <div className="flex justify-center flex-col gap-3 items-stretch">
      <ButtonSignInGoogle />
      <ButtonSignInFacebook />
    </div>
  );
}
