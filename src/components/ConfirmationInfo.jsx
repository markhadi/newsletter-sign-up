import IconSuccess from "../assets/images/icon-success.svg";
import HeaderTitle from "../base/HeaderTitle";

const ConfirmationInfo = ({ email }) => {
  return (
    <article>
      <img src={IconSuccess} alt="Success icon" className="mb-10" />
      <HeaderTitle title="Thanks for subscribing!" />
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
    </article>
  );
};

export default ConfirmationInfo;
