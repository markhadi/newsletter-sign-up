import Desktop from "../assets/images/illustration-sign-up-desktop.svg";
import Mobile from "../assets/images/illustration-sign-up-mobile.svg";

const SignUpIllustration = () => {
  return (
    <picture className="md:order-1">
      <source media="(min-width: 768px)" srcSet={Desktop} />
      <img
        src={Mobile}
        alt="Sign up illustration"
        className="w-full md:w-auto md:mr-0 md:ml-auto"
      />
    </picture>
  );
};

export default SignUpIllustration;
