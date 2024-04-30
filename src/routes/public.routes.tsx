import { Routes, Route, Navigate } from "react-router-dom";

export default function PublicRout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
