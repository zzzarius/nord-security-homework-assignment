import { BAD_CREDENTIALS, NO_USERNAME_OR_PASSWORD } from "@/api/errors";
import { getToken } from "@/api/getToken";
import logoSvg from "@/assets/logo.svg";
import { Button } from "@/shared/components/Button";
import { Description } from "@/shared/components/Description";
import { Heading1 } from "@/shared/components/Heading1";
import { cookieValidForDays } from "@config";
import Cookies from "js-cookie";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FormField } from "./FormField.ui";
import { LoadingIndicator } from "./LoadingIndicator.ui";

interface LoginFormProps {
  errorText?: string;
  username?: string;
  password?: string;
}

export function LoginForm({
  errorText,
  username: initialUsername,
  password: initialPassword,
}: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(errorText);
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const usernameFormValue = event.currentTarget.username.value;
    const passwordFormValue = event.currentTarget.password.value;
    if (!usernameFormValue || !passwordFormValue) {
      setError(NO_USERNAME_OR_PASSWORD);
      setIsLoading(false);
      return;
    }
    setPassword(usernameFormValue);
    setUsername(passwordFormValue);
    try {
      const token = await getToken(usernameFormValue, passwordFormValue);
      Cookies.set("token", token, { expires: cookieValidForDays, path: "" });
      window.location.href = "/";
    } catch (e) {
      setError(BAD_CREDENTIALS);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={twMerge([
        "flex flex-col gap-4 justify-center items-center bg-nexos-light",
        "max-w-[410px] mx-auto pt-6 md:pt-8 pb-10 md:pb-11.5 rounded-lg",
        "shadow-xl w-full",
      ])}
    >
      <img width="108" height="49" src={logoSvg.src} alt="Developer logo" />
      {!isLoading && (
        <>
          <Heading1 className="mt-6">Welcome back!</Heading1>
          <Description>
            Enter details below to log in to your account.
          </Description>
          <form
            className="flex flex-col gap-4 w-full px-6 md:px-8 text-nexos-gray-text"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <FormField
              label="Username"
              name="username"
              placeholder="Enter username"
              defaultValue={username}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              defaultValue={password}
            />
            {error && <p className="text-red-600">{error}</p>}
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </form>
        </>
      )}
      <LoadingIndicator visible={isLoading} />
    </div>
  );
}
