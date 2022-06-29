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
      <p>
        これは<span className={styles.underline}>下線</span>がついています。
      </p>
      <p>
        これは<span className={styles.teSesame}>圏点</span>がついています。
      </p>
      <p>
        これはルビの例です。
        <ruby>
          漢 <rp>(</rp>
          <rt>かん</rt>
          <rp>)</rp>字 <rp>(</rp>
          <rt>じ</rt>
          <rp>)</rp>
        </ruby>
        のような1文字ずつのルビや、
        <ruby>
          明日 <rp>(</rp>
          <rt>あした</rt>
          <rp>)</rp>
        </ruby>
        のような熟語に対するルビがあります。
      </p>
      <p>
        これはルビの位置操作の例です。
        <ruby className={styles.rubyOver}>
          上 <rp>(</rp>
          <rt>うえ</rt>
          <rp>)</rp>
        </ruby>
        や
        <ruby className={styles.rubyUnder}>
          下 <rp>(</rp>
          <rt>した</rt>
          <rp>)</rp>
        </ruby>
        、
        <ruby className={styles.rubyUnder}>
          <ruby className={styles.rubyOver}>
            上手 <rp>(</rp>
            <rt>かみて</rt>
            <rp>)</rp>
          </ruby>
          <rp>(</rp>
          <rt>じょうず</rt>
          <rp>)</rp>
        </ruby>
        のように両方に書くこともできます。
      </p>
    </>
  );
}

export function Decoration() {
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
