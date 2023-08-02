import React from "react";

export default function withStakeInput(ClientComponent) {
  //   const listnerIdRef = React.useRef(-1);

  return (props) => {
    const clientRef = React.useRef<HTMLInputElement | null>(null);
    const onFocusInterceptor = (e) => {
      console.log("onFocusInterceptor");
      console.log(e);
      console.log(e.target);
      console.log(e.target.id);
      console.log(e.target.value);
      console.log(e.target.name);
    };

    return (
      <ClientComponent
        ref={clientRef}
        onFocus={onFocusInterceptor}
        {...props}
      />
    );
  };
}
