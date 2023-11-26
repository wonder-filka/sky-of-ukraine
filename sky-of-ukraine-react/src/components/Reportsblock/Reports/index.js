import React from "react";
import ReportItemMap from "./ReportItemMap";

const Reports = ({ info }) => {
  const list = info.map((item, key) => <ReportItemMap item={item} key={key} />);
  return <>{list}</>;
};

export default Reports;
