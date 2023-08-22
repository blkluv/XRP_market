interface IconProps {
  fill?: string;
  size?: number;
  color?: string;
  stroke?: string;
  className?: string;
  onClick?: () => void;
}

const Icons = {
  // App Logo
  AppLogo: ({ size = 23 }: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 92 23"
        style={{
          height: size,
          width: size * (92 / 23),
        }}
      >
        <rect width={23} height={23} fill="#16161A" rx={11.5} />
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.031}
          d="M9.75 8h3.75v3.75H9.75V8ZM9.75 11.75h3.75v3.75H9.75v-3.75ZM13.5 8h3.75v3.75H13.5V8ZM6 11.75h3.75v3.75H6v-3.75Z"
        />
        <path
          fill="#000"
          d="M35.16 17.24c-3.456 0-5.616-2.528-5.616-5.968s2.16-5.952 5.616-5.952c3.44 0 5.616 2.512 5.616 5.952S38.6 17.24 35.16 17.24Zm0-1.632c2.624 0 3.712-2.016 3.712-4.336 0-2.304-1.088-4.32-3.712-4.32s-3.728 2.016-3.728 4.32c0 2.32 1.104 4.336 3.728 4.336ZM46.353 8.6c2.08 0 3.631 1.632 3.631 4.32 0 2.688-1.552 4.32-3.632 4.32-1.28 0-2.08-.608-2.511-1.216h-.032v3.76h-1.697V8.824h1.697v.96h.032c.431-.576 1.231-1.184 2.511-1.184Zm-.32 7.264c1.471 0 2.255-1.344 2.255-2.944 0-1.6-.783-2.944-2.255-2.944-1.36 0-2.209 1.12-2.209 2.944 0 1.808.849 2.944 2.209 2.944Zm8.843-5.664H53.34v4.432c0 .928.448 1.04 1.536.976v1.376a4.87 4.87 0 0 1-1.152.128c-1.344 0-2.08-.608-2.08-2.336V10.2H50.46V8.824h1.184V6.248h1.696v2.576h1.536V10.2Zm2.165-2.752c-.464 0-.944-.32-.944-.896 0-.576.48-.88.944-.88.496 0 .96.304.96.88 0 .576-.464.896-.96.896Zm-.832 1.376h1.68V17h-1.68V8.824ZM68.62 8.6c1.648 0 2.496.992 2.496 2.752V17H69.42v-5.168c0-1.104-.224-1.808-1.376-1.808-1.136 0-1.84.784-1.84 2V17h-1.696v-5.168c0-1.104-.224-1.808-1.392-1.808-1.12 0-1.84.784-1.84 2V17h-1.68V8.824h1.68V9.88h.032c.432-.64 1.2-1.28 2.432-1.28 1.152 0 1.84.528 2.176 1.408h.032c.608-.784 1.408-1.408 2.672-1.408Zm8.998 2.368c0-.592-.352-1.04-1.472-1.04-1.344 0-1.84.416-1.92 1.472h-1.632c.08-1.568 1.088-2.8 3.552-2.8 1.808 0 3.152.688 3.152 2.864v3.888c0 .576.128.88.784.816v.8a2.528 2.528 0 0 1-.976.176c-.896 0-1.312-.32-1.472-1.12h-.032c-.512.72-1.44 1.216-2.704 1.216-1.664 0-2.688-.96-2.688-2.336 0-1.792 1.328-2.352 3.376-2.752 1.264-.24 2.032-.4 2.032-1.184Zm-2.352 4.944c1.392 0 2.352-.688 2.352-2.016v-1.232c-.272.192-.928.384-1.712.544-1.392.304-2 .704-2 1.536 0 .752.448 1.168 1.36 1.168Zm9.687-7.28c.288 0 .496.016.736.048v1.584h-.032c-1.616-.272-2.912.816-2.912 2.56V17h-1.68V8.824h1.68v1.536h.032c.432-1.024 1.104-1.728 2.176-1.728ZM90.72 10.2h-1.536v4.432c0 .928.448 1.04 1.536.976v1.376a4.87 4.87 0 0 1-1.152.128c-1.344 0-2.08-.608-2.08-2.336V10.2h-1.184V8.824h1.184V6.248h1.696v2.576h1.536V10.2Z"
        />
      </svg>
    );
  },
  AppLogoIcon: ({ size = 23 }: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 128 128"
        style={{
          width: size,
          height: size,
        }}
      >
        <rect width={128} height={128} fill="#16161A" rx={64} />
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.031}
          d="M54.261 44.522h20.87v20.87H54.26v-20.87Z"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.031}
          d="M54.261 65.391h20.87v20.87H54.26V65.39Z"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.031}
          d="M75.13 44.522H96v20.87H75.13v-20.87ZM33.391 65.391h20.87v20.87H33.39V65.39Z"
        />
      </svg>
    );
  },

  // Coins
  XRP: ({ size = 24 }: IconProps) => (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 15 15"
      style={{
        width: size,
        height: size,
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth={"0.6px"}
        d="m4.193 5.155l-3.06-3.316l.734-.678l3.061 3.316a3.5 3.5 0 0 0 5.144 0l3.06-3.316l.735.678l-3.06 3.316a4.5 4.5 0 0 1-6.614 0Zm5.879 5.368a3.5 3.5 0 0 0-5.144 0l-3.06 3.316l-.735-.678l3.06-3.316a4.5 4.5 0 0 1 6.614 0l3.06 3.316l-.734.678l-3.061-3.316Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),

  XRP2: ({ size = 24 }: IconProps) => (
    <svg
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: size,
        height: size * (225 / 298),
      }}
      viewBox="0 0 2500 2500"
    >
      <circle cx={1250} cy={1250} r={1250} />
      <path
        d="M1820.4 549.8h233.2l-485.5 503.4c-175.8 182.3-460.8 182.3-636.2 0L446.3 549.8h233.2l368.7 382.4c111.5 115.3 291.8 115.3 403 0l369.2-382.4zM676.6 1950.2H443.3l488.6-506.8c175.8-182.3 460.8-182.3 636.6 0l488.6 506.8h-233.3L1452 1564.4c-111.5-115.3-291.8-115.3-403 0l-372.4 385.8z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  ),
  XRPL: ({ size = 24 }: IconProps) => (
    <svg
      viewBox="0 0 298 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: size,
        height: size * (225 / 298),
      }}
    >
      <path
        d="M68.5456 13.9416H73.9673V0.000139238H68.5456C62.7975 -0.00495441 57.1047 1.12348 51.7931 3.32086C46.4815 5.51824 41.6553 8.74144 37.5907 12.806C33.5262 16.8706 30.303 21.6968 28.1056 27.0084C25.9082 32.32 24.7798 38.0127 24.7849 43.7609V75.5165C24.7965 82.2404 22.2357 88.7141 17.6273 93.6105C13.019 98.5068 6.71227 101.455 0 101.85L0.387264 108.821L0 115.792C6.71227 116.187 13.019 119.136 17.6273 124.032C22.2357 128.928 24.7965 135.402 24.7849 142.126V178.722C24.7643 190.866 29.566 202.521 38.1348 211.126C46.7035 219.731 58.3382 224.582 70.482 224.613V210.671C62.0614 210.666 53.9872 207.319 48.033 201.365C42.0788 195.411 38.7315 187.336 38.7264 178.916V142.126C38.7322 135.558 37.1293 129.088 34.0577 123.282C30.986 117.477 26.5392 112.512 21.1059 108.821C26.5237 105.115 30.9588 100.147 34.0285 94.3446C37.0983 88.5425 38.7106 82.0807 38.7264 75.5165V43.7609C38.762 35.8633 41.9151 28.2994 47.4996 22.7149C53.0841 17.1304 60.6481 13.9773 68.5456 13.9416V13.9416Z"
        fill="currentColor"
        strokeWidth={13}
        stroke="currentColor"
      />
      <path
        d="M229.648 13.9414H224.227V-6.10352e-05H229.648C241.227 0.0307156 252.32 4.65727 260.489 12.8629C268.659 21.0685 273.236 32.1819 273.215 43.7607V75.5163C273.204 82.2402 275.765 88.7139 280.373 93.6103C284.981 98.5066 291.288 101.455 298 101.85L297.613 108.821L298 115.792C291.288 116.187 284.981 119.135 280.373 124.032C275.765 128.928 273.204 135.402 273.215 142.126V178.722C273.236 190.866 268.434 202.521 259.865 211.126C251.297 219.731 239.662 224.582 227.518 224.613V210.671C235.939 210.666 244.013 207.319 249.967 201.365C255.921 195.41 259.269 187.336 259.274 178.916V142.126C259.268 135.557 260.871 129.088 263.943 123.282C267.014 117.476 271.461 112.511 276.894 108.821C271.477 105.115 267.041 100.147 263.972 94.3444C260.902 88.5423 259.29 82.0805 259.274 75.5163V43.7607C259.294 39.8554 258.543 35.9844 257.064 32.37C255.585 28.7556 253.407 25.4688 250.654 22.6983C247.902 19.9278 244.629 17.7281 241.024 16.2254C237.42 14.7226 233.554 13.9465 229.648 13.9414V13.9414Z"
        fill="currentColor"
        strokeWidth={13}
        stroke="currentColor"
      />
      <path
        d="M199.828 56.1533H220.547L177.367 96.6224C169.62 103.632 159.544 107.514 149.097 107.514C138.649 107.514 128.573 103.632 120.826 96.6224L77.6465 56.1533H98.3651L131.089 86.7471C135.976 91.232 142.367 93.7204 149 93.7204C155.633 93.7204 162.024 91.232 166.911 86.7471L199.828 56.1533Z"
        fill="currentColor"
        strokeWidth={13}
        stroke="currentColor"
      />
      <path
        d="M98.1717 168.459H77.4531L120.827 127.796C128.531 120.7 138.622 116.761 149.097 116.761C159.571 116.761 169.663 120.7 177.367 127.796L220.741 168.459H200.022L167.105 137.478C162.218 132.993 155.826 130.505 149.194 130.505C142.561 130.505 136.169 132.993 131.283 137.478L98.1717 168.459Z"
        fill="currentColor"
        strokeWidth={13}
        stroke="currentColor"
      />
    </svg>
  ),

  // Icons
  checkBox: ({ size = 20, checked = false }) => (
    <svg
      fill="none"
      viewBox="0 0 12 12"
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {checked ? (
        <path
          d="M10.8 12H1.20002C0.539998 12 0 11.46 0 10.8V1.20002C0 0.539998 0.539998 0 1.20002 0H10.8C11.46 0 12 0.539998 12 1.20002V10.8C12 11.46 11.46 12 10.8 12ZM9.69004 3.49504C9.40501 3.24005 8.95501 3.24005 8.68504 3.49504L4.83006 7.09502L3.31509 5.685C3.03007 5.43002 2.58007 5.43002 2.3101 5.685C2.02507 5.93999 2.02507 6.35997 2.3101 6.63002L4.32006 8.50501C4.60509 8.76 5.05508 8.76 5.32506 8.50501L9.69004 4.42503C9.97495 4.17005 9.97495 3.75006 9.69004 3.49506V3.49504Z"
          fill="#2081e2"
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M9.81822 0H2.18178C0.981817 0 0 0.981817 0 2.18178V9.81822C0 11.0182 0.981817 12 2.18178 12H9.81822C11.0182 12 12 11.0182 12 9.81822V2.18178C12 0.981817 11.0182 0 9.81822 0V0ZM10.9092 9.81817C10.9092 10.4198 10.4199 10.9091 9.81822 10.9091H2.18178C1.58012 10.9091 1.09085 10.4198 1.09085 9.81817L1.09094 2.18174C1.09094 1.58007 1.58021 1.0908 2.18188 1.0908H9.81831C10.42 1.0908 10.9092 1.58007 10.9092 2.18174L10.9092 9.81817Z"
          fill="#808094"
        />
      )}
    </svg>
  ),

  Search: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.58342 18.1253C4.87508 18.1253 1.04175 14.292 1.04175 9.58366C1.04175 4.87533 4.87508 1.04199 9.58342 1.04199C14.2917 1.04199 18.1251 4.87533 18.1251 9.58366C18.1251 14.292 14.2917 18.1253 9.58342 18.1253ZM9.58342 2.29199C5.55841 2.29199 2.29175 5.56699 2.29175 9.58366C2.29175 13.6003 5.55841 16.8753 9.58342 16.8753C13.6084 16.8753 16.8751 13.6003 16.8751 9.58366C16.8751 5.56699 13.6084 2.29199 9.58342 2.29199Z" />
      <path d="M18.3333 18.9585C18.175 18.9585 18.0166 18.9002 17.8916 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4666 15.9835 16.8666 15.9835 17.1083 16.2252L18.775 17.8919C19.0166 18.1335 19.0166 18.5335 18.775 18.7752C18.65 18.9002 18.4916 18.9585 18.3333 18.9585Z" />
    </svg>
  ),
  GitHub: ({ size = 24 }: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{
          width: size,
          height: size,
        }}
      >
        <path
          fill="currentColor"
          d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z"
        />
      </svg>
    );
  },
};

export default Icons;
