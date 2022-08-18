export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">styled jsx</p>
        <button className="button">fight!!</button>
      </div>
      <style jsx="true">
        {`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid blue;
          }
          .title {
            margin-right: 20px;
          }
          .button {
            padding: 7px;
            font-size: 16px;
            background-color: khaki;
            border: none;
          }
        `}
      </style>
    </>
  );
};
