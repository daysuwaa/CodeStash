function color({ code }) {
  if (
    code.language === "React" ||
    code.language === "react" ||
    code.language === "HTML" ||
    code.language === "html"
  ) {
    return <div className="bg-red-300">{code.language}</div>;
  }
}
export default color;
