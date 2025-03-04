import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";
// jobs.svg
const JobsIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="84" height="104" viewBox="0 0 84 104" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M27.0002 17C27.0002 25.2843 33.716 32 42.0002 32C50.2845 32 57.0002 25.2843 57.0002 17C57.0002 8.71573 50.2845 2 42.0002 2C33.716 2 27.0002 8.71573 27.0002 17ZM50.0073 32C55.3592 29.1371 59.0002 23.4938 59.0002 17C59.0002 7.61116 51.3891 0 42.0002 0C32.6114 0 25.0002 7.61116 25.0002 17C25.0002 23.4938 28.6412 29.1371 33.9931 32H28.0002C19.841 32 13.1082 38.1074 12.124 46H14.142C15.1125 39.2154 20.9473 34 28.0002 34H42.0002H56.0002C63.0532 34 68.888 39.2154 69.8585 46H71.8764C70.8923 38.1074 64.1595 32 56.0002 32H50.0073ZM4 50H80C81.1046 50 82 50.8954 82 52V97H2V52C2 50.8954 2.89543 50 4 50ZM0 97V52C0 49.7909 1.79086 48 4 48H80C82.2091 48 84 49.7909 84 52V97V99V100C84 102.209 82.2091 104 80 104H4C1.79086 104 0 102.209 0 100V99V97ZM2 99V100C2 101.105 2.89543 102 4 102H80C81.1046 102 82 101.105 82 100V99H2ZM54 74C54 80.6274 48.6274 86 42 86C35.3726 86 30 80.6274 30 74C30 67.3726 35.3726 62 42 62C48.6274 62 54 67.3726 54 74Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
        <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="84" y1="-33.3585" x2="-41.727" y2="-8.5717" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientColor1}/>
          <stop offset="0.963542" stopColor={gradientColor2}/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default JobsIcon;
