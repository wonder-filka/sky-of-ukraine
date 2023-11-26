import "./HeadLinks.css";
import React from "react";

export default function HeadLinks(props) {
  return (
    <div className="social-link container">
      <div className="social-link-item">
        <a
          href="https://t.me/the_sky_of_ukraine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="socialLinks-icon-header"
          >
            <path
              d="M11.0001 16.8625L22.2376 26.75C22.3675 26.865 22.525 26.9442 22.6948 26.9799C22.8645 27.0156 23.0406 27.0065 23.2058 26.9535C23.371 26.9006 23.5195 26.8056 23.6369 26.6779C23.7542 26.5501 23.8363 26.3941 23.8751 26.225L28.5751 5.70004C28.6145 5.52327 28.6052 5.33913 28.5481 5.16726C28.4911 4.99538 28.3884 4.84224 28.2511 4.72417C28.1137 4.6061 27.9469 4.52753 27.7684 4.49686C27.59 4.4662 27.4065 4.48457 27.2376 4.55004L4.16263 13.6125C3.23763 13.975 3.36263 15.325 4.33763 15.525L11.0001 16.8625Z"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11 16.8617L28.0125 4.57422"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.6125 21.8008L12.7125 25.7008C12.5734 25.8421 12.3954 25.9388 12.2011 25.9787C12.0069 26.0186 11.8052 25.9998 11.6216 25.9248C11.4381 25.8497 11.281 25.7218 11.1703 25.5573C11.0596 25.3928 11.0003 25.1991 11 25.0008V16.8633"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <div className="social-link-item">
        <a
          href="https://www.instagram.com/the_sky_of_ukraine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="socialLinks-icon-header"
          >
            <path
              d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
              stroke={props.color}
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
              fill={props.color}
            ></path>
          </svg>
        </a>
      </div>
      <div className="social-link-item">
        <a
          href="https://www.facebook.com/groups/neboukrainu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="socialLinks-icon-header"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21 11H19C18.6056 10.9984 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9984 13.6056 16 14V28"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 18H20"
              stroke={props.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
