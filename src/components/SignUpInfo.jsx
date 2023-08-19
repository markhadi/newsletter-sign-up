import HeaderTitle from "../base/HeaderTitle";
import Button from "../base/Button";
import IconList from "../assets/images/icon-list.svg";

import { useState } from "react";

const SignUpInfo = ({ onSubscribe }) => {
  const FeaturesList = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailRegex.test(email)) {
      setIsValid(true);
      onSubscribe(email);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="p-10 md:p-0 md:pl-10 md:pr-6 md:grid md:place-content-center">
      <div>
        <HeaderTitle title="Stay updated!" />
        <p className="mb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mb-[42px]">
          {FeaturesList.map((item) => (
            <li key={item}>
              <img src={IconList} alt="Bullet point icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <form action="" method="post" role="form" onSubmit={handleFormSubmit}>
          <div className="text-xs font-bold text-charcoal-grey-950 mb-6">
            <div className="flex justify-between mb-[10px]">
              <label htmlFor="email">Email address</label>
              {!isValid && (
                <span className="text-tomato-500">Valid email required</span>
              )}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                !isValid
                  ? "border-tomato-500 text-tomato-500 focus:border-tomato-500"
                  : ""
              }`}
            />
          </div>
          <Button
            label="Subscribe to monthly newsletter"
            onClickBtn={handleFormSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpInfo;
