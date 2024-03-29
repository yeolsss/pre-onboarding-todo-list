import React, { useRef, useState } from "react";

type UseInputReturnType = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ref: React.RefObject<HTMLInputElement>,
];

export default function useInput(): UseInputReturnType {
  const [state, setState] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return [state, setState, handleChange, ref];
}
