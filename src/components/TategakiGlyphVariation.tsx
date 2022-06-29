import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import TuData from "../data/tu.json";
import TrData from "../data/tr.json";
import UData from "../data/u.json";
import RData from "../data/r.json";

const CHARS = [..."「」‖…〈〉"];
const FONTS = [
  "メイリオ",
  "MSゴシック",
  "游ゴシック",
  "Noto_Sans_JP",
  "Noto_Sans",
  // "ヒラギノ角ゴ",
];

const VoValues = ["R", "U", "Tr", "Tu"] as const;
type VoValue = typeof VoValues[number];
function assertVoValue(x: string): asserts x is VoValue {
  if (!VoValues.includes(x as any)) {
    throw new Error(`${x} is not Vo value`);
  }
}

const VoData: Record<VoValue, typeof TuData> = {
  R: RData,
  U: UData,
  Tr: TrData,
  Tu: TuData,
};

export function TategakiGlyphVariation() {
  const [voValue, setVoValue] = useState<VoValue>("Tu");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showOnlyChecked, setShowOnlyChecked] = useState(false);
  const chars = VoData[voValue];

  const handleVoValueChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newVo = e.target.value;
      assertVoValue(newVo);
      setVoValue(newVo);
    },
    []
  );

  const handleChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const codepoint = e.target.name;
    const value = e.target.checked;
    setChecked((prev) => ({ ...prev, [codepoint]: value }));
  }, []);

  const handleShowOnlyChecked = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setShowOnlyChecked(e.target.checked);
    },
    []
  );

  return (
    <div>
      <label>
        Vertical Orientation:{" "}
        <select onChange={handleVoValueChange} value={voValue}>
          {VoValues.map((vo) => (
            <option key={vo} value={vo}>
              {vo}
            </option>
          ))}
        </select>
      </label>
      <label>
        hide checked:{" "}
        <input
          type="checkbox"
          checked={showOnlyChecked}
          onChange={handleShowOnlyChecked}
        />
      </label>
      <table className="fontVariationTable">
        <thead style={{ position: "sticky", top: 0 }}>
          <tr>
            <th>x</th>
            <th>codepoint</th>
            <th>VO</th>
            {FONTS.map((x) => (
              <th key={x} className={x}>
                {x}
              </th>
            ))}
            <th>名前</th>
          </tr>
          <tr>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            {FONTS.map((x) => (
              <th key={x} style={{ writingMode: "vertical-lr" }} className={x}>
                横書き
                <br />
                mixed
                <br />
                <span style={{ textOrientation: "upright" }}>upright</span>
                <br />
                sideways
              </th>
            ))}
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {chars
            .filter((c) => (showOnlyChecked ? checked[c.codepoint] : true))
            .map((c) => {
              const [begin, end] = c.codepoint.split("..").map((x) => `0x${x}`);
              const char = String.fromCharCode(parseInt(begin, 16));
              return (
                <tr key={c.codepoint}>
                  <td>
                    <input
                      type="checkbox"
                      name={c.codepoint}
                      checked={checked[c.codepoint]}
                      onChange={handleChecked}
                    />
                  </td>
                  <td>
                    {begin}
                    {end && `..${end}`}
                  </td>
                  <td>{c.vo}</td>
                  {FONTS.map((x) => (
                    <td key={x} className={x}>
                      <span>{char}</span>
                      <span style={{ writingMode: "vertical-rl" }}>{char}</span>
                      <span
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                      >
                        {char}
                      </span>
                      <span
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "sideways",
                        }}
                      >
                        {char}
                      </span>
                    </td>
                  ))}
                  <td>{c.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
