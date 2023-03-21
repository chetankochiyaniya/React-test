/*
The purpose of the hook is for generating unique IDs that are 
stable across the server and client while avoiding hydration mismatches.


Overall, using the useId hook to generate unique IDs for HTML elements is a best practice in React applications and can help avoid issues related to ID collisions, accessibility, and script behavior.

using the same ID for multiple elements can lead to issues with styling and script behaviors.
*/
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function UseID() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}

