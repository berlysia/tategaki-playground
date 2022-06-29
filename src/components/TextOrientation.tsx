import { Tategaki } from "./Tategaki";

const styles: Record<string, string> = {};

function Words() {
  return (
    <>
      <p>
        これは日本語のテキストです。半角英数字がmixedされてもいます。123や12345と数字も混じります。
      </p>
      <p>
        これは縦中横の例です。<span className={styles.tcuAll}>all</span>や
        <span className={styles.tcuNone}>none</span>の値のほか、
        <span className={styles.tcuDigits}>12</span>
        のような数字を扱うdigitsもあります。
      </p>
    </>
  );
}

export function TextOrientation() {
  return (
    <Tategaki>
      <section className={styles.toMixed}>
        <h2>mixed</h2>
        <Words />
      </section>
      <section className={styles.toUpright}>
        <h2>upright</h2>
        <Words />
      </section>
      <section className={styles.toSideways}>
        <h2>sideways</h2>
        <Words />
      </section>
    </Tategaki>
  );
}
