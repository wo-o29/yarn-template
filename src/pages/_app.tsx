import type { AppProps } from "next/app";
import React from "react";

// 페이지 컴포넌트에 레이아웃을 추가할 수 있도록 확장한 타입
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
