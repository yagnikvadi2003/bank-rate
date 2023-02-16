import React, { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import BankRate from "../container/BankRate";

const Loading = lazy<any>(() => import('./messages/Loading'));
const ErrorPage = lazy<any>(() => import('./error/ErrorPage'));

const Root: FC = (): JSX.Element => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<BankRate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default Root;