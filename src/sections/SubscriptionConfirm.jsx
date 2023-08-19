import React from "react";
import Button from "../base/Button";
import ConfirmationInfo from "../components/ConfirmationInfo";

const SubscriptionConfirm = ({ onGoBack, email }) => {
  return (
    <section className="bg-white min-h-screen max-w-[504px] flex flex-col gap-10 justify-between px-6 py-10 sm:min-h-0 sm:rounded-[36px] sm:px-16 sm:py-12">
      <ConfirmationInfo email={email} />
      <Button label="Dismiss message" onClickBtn={onGoBack} />
    </section>
  );
};

export default SubscriptionConfirm;
