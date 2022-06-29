import { Tategaki } from "./Tategaki";

function Words() {
  return (
    <div>
      <p>これは「縦書きHTML/CSS」のテストです。</p>
      <p>全角Ａｌｐｈａｂｅｔ、αβγ</p>
    </div>
  );
}

export function TategakiSampleTable() {
  return (
    <div style={{ width: "640px", marginRight: "auto", marginLeft: "auto" }}>
      <br />
      <br />
      <br />
      <br />
      <Tategaki>
        <table>
          <tr>
            <th>プロパティ</th>
            <th>値</th>
            <th>表示例</th>
          </tr>
          <tr>
            <td rowSpan={3}>text-orientation</td>
            <td>mixed</td>
            <td style={{ verticalAlign: "top", textOrientation: "mixed" }}>
              <Words />
            </td>
          </tr>
          <tr>
            <td>upright</td>
            <td style={{ verticalAlign: "top", textOrientation: "upright" }}>
              <Words />
            </td>
          </tr>
          <tr>
            <td>sideways</td>
            <td style={{ verticalAlign: "top", textOrientation: "sideways" }}>
              <Words />
            </td>
          </tr>
          <tr>
            <td>text-combine-upright</td>
            <td>all</td>
            <td style={{ verticalAlign: "top" }}>
              縦中横にしたい箇所に指定します。
              <br />
              12月、
              <span style={{ textCombineUpright: "all" }}>12</span>月
            </td>
          </tr>
        </table>
      </Tategaki>
    </div>
  );
}
