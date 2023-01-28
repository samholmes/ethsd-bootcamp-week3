export function LangLinks() {
  return (
    <div id="langlinks">
      <select
        name="lang"
        id="chlang"
        className="js-only"
        defaultValue="english"
      >
        <option value="dansk">dansk</option>
        <option value="deutsch">deutsch</option>
        <option value="english">english</option>
        <option value="español">español</option>
        <option value="français">français</option>
        <option value="italiano">italiano</option>
        <option value="português">português</option>
        <option value="suomi">suomi</option>
        <option value="svenska">svenska</option>
        <option value="tiếng việt">tiếng việt</option>
        <option value="türkçe">türkçe</option>
        <option value="русский">русский</option>
        <option value="中文">中文</option>
        <option value="日本語">日本語</option>
        <option value="한국말">한국말</option>
      </select>
    </div>
  );
}
