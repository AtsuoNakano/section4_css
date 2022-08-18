import cssStyle from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={cssStyle.container}>
      <p className={cssStyle.title}>CSSモジュールズ</p>
      <button className={cssStyle.button}>fight!!</button>
    </div>
  );
};
