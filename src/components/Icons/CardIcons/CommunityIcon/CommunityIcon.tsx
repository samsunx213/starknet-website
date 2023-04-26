import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";

const CommunityIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16C36 20.4896 37.8491 24.5473 40.8273 27.453C43.7109 30.2665 47.653 32 52 32C56.347 32 60.2891 30.2665 63.1727 27.453C66.1509 24.5473 68 20.4896 68 16C68 7.16344 60.8366 0 52 0C43.1634 0 36 7.16344 36 16ZM48 23C45.588 23 43.4254 24.0674 41.9586 25.7556C44.5025 28.3735 48.0613 30 52 30C55.9387 30 59.4975 28.3735 62.0414 25.7556C60.5746 24.0674 58.412 23 56 23H48ZM45 14C45 17.866 48.134 21 52 21C55.866 21 59 17.866 59 14C59 10.134 55.866 7 52 7C48.134 7 45 10.134 45 14ZM4.82732 63.453C1.84913 60.5473 0 56.4896 0 52C0 43.1634 7.16344 36 16 36C24.8366 36 32 43.1634 32 52C32 56.4896 30.1509 60.5473 27.1727 63.453C24.2891 66.2665 20.347 68 16 68C11.653 68 7.71093 66.2665 4.82732 63.453ZM5.95864 61.7556C7.4254 60.0674 9.58805 59 12 59H20C22.412 59 24.5746 60.0674 26.0414 61.7556C23.4975 64.3735 19.9387 66 16 66C12.0613 66 8.50254 64.3735 5.95864 61.7556ZM16 57C12.134 57 9 53.866 9 50C9 46.134 12.134 43 16 43C19.866 43 23 46.134 23 50C23 53.866 19.866 57 16 57ZM76.8273 63.453C73.8491 60.5473 72 56.4896 72 52C72 43.1634 79.1634 36 88 36C96.8366 36 104 43.1634 104 52C104 56.4896 102.151 60.5473 99.1727 63.453C96.2891 66.2665 92.347 68 88 68C83.653 68 79.7109 66.2665 76.8273 63.453ZM77.9586 61.7556C79.4254 60.0674 81.588 59 84 59H92C94.412 59 96.5746 60.0674 98.0414 61.7556C95.4975 64.3735 91.9387 66 88 66C84.0613 66 80.5025 64.3735 77.9586 61.7556ZM88 57C84.134 57 81 53.866 81 50C81 46.134 84.134 43 88 43C91.866 43 95 46.134 95 50C95 53.866 91.866 57 88 57ZM40.8273 99.453C37.8491 96.5473 36 92.4896 36 88C36 79.1634 43.1634 72 52 72C60.8366 72 68 79.1634 68 88C68 92.4896 66.1509 96.5473 63.1727 99.453C60.2891 102.266 56.347 104 52 104C47.653 104 43.7109 102.266 40.8273 99.453ZM41.9586 97.7556C43.4254 96.0674 45.588 95 48 95H56C58.412 95 60.5746 96.0674 62.0414 97.7556C59.4975 100.374 55.9387 102 52 102C48.0613 102 44.5025 100.374 41.9586 97.7556ZM52 93C48.134 93 45 89.866 45 86C45 82.134 48.134 79 52 79C55.866 79 59 82.134 59 86C59 89.866 55.866 93 52 93ZM25.1123 67.5263L36.4736 78.8876C36.8193 78.2999 37.1974 77.7336 37.6054 77.191L26.8089 66.3945C26.2664 66.8026 25.7 67.1807 25.1123 67.5263ZM78.2689 67.1454C77.7 66.7792 77.1531 66.3817 76.6305 65.9554L65.9553 76.6306C66.3816 77.1532 66.779 77.7001 67.1453 78.269L78.2689 67.1454ZM27.7109 38.3303L38.3303 27.7109C38.7648 28.2176 39.2269 28.6998 39.7144 29.1553L29.1552 39.7145C28.6998 39.227 28.2176 38.7648 27.7109 38.3303ZM51 33.9727V43.0549C46.8284 43.516 43.516 46.8284 43.0549 51H33.9727C33.9908 51.331 34 51.6644 34 52C34 52.3355 33.9908 52.6689 33.9727 53H43.0549C43.516 57.1716 46.8284 60.4839 51 60.945V70.0273C51.331 70.0091 51.6644 70 52 70C52.3355 70 52.6689 70.0091 53 70.0273V60.945C57.1716 60.4839 60.4839 57.1716 60.945 53H70.0273C70.0092 52.6689 70 52.3355 70 52C70 51.6644 70.0092 51.331 70.0273 51H60.945C60.4839 46.8284 57.1716 43.516 53 43.0549V33.9727C52.6689 33.9908 52.3355 34 52 34C51.6644 34 51.331 33.9908 51 33.9727ZM74.5846 39.9986L64.0013 29.4152C64.4983 28.9703 64.9705 28.4981 65.4155 28.001L75.9988 38.5843C75.5017 39.0293 75.0295 39.5015 74.5846 39.9986Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="104" y1="-33.3585" x2="-48.6193" y2="3.894" gradientUnits="userSpaceOnUse">
      <stop stop-color={gradientColor1}/>
      <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      </defs>
    </svg>
  )
};

export default CommunityIcon;