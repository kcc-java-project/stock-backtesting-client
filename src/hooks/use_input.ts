import { useState } from "react";

/**
 * input 태그의 value의 상태 관리 함수
 * @param initialValue 초기값
 * @returns [value, changeValue, setValue]
 */
export const useInputState = (initialValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  const changeValue = ((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  });

  return [value, changeValue, setValue];
};
