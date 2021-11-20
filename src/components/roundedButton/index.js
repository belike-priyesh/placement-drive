import React from "react";
import "./rounded-btn.css";
export default function RoundedButton({ text, onPress }) {
  return (
    <div className="RoundedBtnContainer" onClick={onPress}>
      {text ?? "Button"}
    </div>
  );
}
