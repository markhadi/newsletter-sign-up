import SignUp from "./sections/SignUp";
import SubscriptionConfirm from "./sections/SubscriptionConfirm";

import { useState } from "react";

const App = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  return (
    <>
      {isSubscribe ? (
        <SubscriptionConfirm
          onGoBack={() => setIsSubscribe(false)}
          email={subscribedEmail}
        />
      ) : (
        <SignUp
          onSubscribe={(email) => {
            setSubscribedEmail(email);
            setIsSubscribe(true);
          }}
        />
      )}
    </>
  );
};

export default App;
