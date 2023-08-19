import SignUpIllustration from "../components/SignUpIllustration";
import SignUpInfo from "../components/SignUpInfo";

const SignUp = ({ onSubscribe }) => {
  return (
    <main>
      <SignUpIllustration />
      <SignUpInfo onSubscribe={onSubscribe} />
    </main>
  );
};

export default SignUp;
