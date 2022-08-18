export const InlineStyle = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid blue"
  };
  const textStyle = {
    marginRight: "20px"
  };
  const buttonStyle = {
    padding: "7px",
    fontSize: "16px",
    backgroundColor: "khaki",
    border: "none"
  };
  return (
    <div style={containerStyle}>
      <p style={textStyle}>インラインスタイル</p>
      <button style={buttonStyle}>fight!!</button>
    </div>
  );
};
