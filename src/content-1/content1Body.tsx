import React from 'react'
import Calculator from './calculator'

export default function Content1Body() {
  return (
    <div className="body">
      <h2 id="content1-1">Reactって？</h2>
      <p>
        Reactとは、いわゆるSPA(SinglePageApplication)のようなUIを作ることに特化したJavascriptのフレームワークです。
        <br />
        Reactを使うことでリッチな画面を作成することが可能になります。
      </p>
      <h2 id="content1-2">Reactの特徴</h2>
      <h3 id="sub1-2-1">JSX記法</h3>
      <p>
        Reactにはいくつかの特徴があります。
        <br />
        まず、1つ目の特徴はJSX記法と呼ばれる書き方です。
        <br />
        どのような書き方なのかは以下のサンプルを見てみましょう。
      </p>
      <pre>
        <code>
          const sample = &#40;props&#41; =&gt; &#123;
          <br />
          &ensp;return &#40;&lt;ul&gt; className="list"&gt;
          <br />
          &ensp;&ensp;&ensp;&#123;props.listItems.map&#40;&#40;item&#41; =&gt;
          &lt;li&gt;&#123;item&#125;&lt;/li&gt;&#41;&#125;
          <br />
          &ensp;&lt;/ul&gt;&#41;;
          <br />
          &#125;
          <br />
          <br />
          const listItems = &#91;'りんご', 'みかん', 'メロン'&#93;
        </code>
      </pre>
      <p>
        このようにHTMLとJavascriptの記述が一体となっているものがJSXとなっており、これがReactの特徴の一つとなります。
        <br />
        また、今回紹介はしませんが上記のJSXを用いなくても普通のJavascriptと使ってReactを書くこともできます。
      </p>

      <h3 id="sub1-2-2" className="h3-toc">
        HTMLが自動で更新されるリアクティブなプログラミング
      </h3>
      <p>
        Reactの良いところとしてデータを更新しただけで自動でHTMLが更新される仕組みがあります。
        <br />
        具体的な例は以下のサンプルを見てみましょう。
        <br />
        フォームに値を入力するとリアルタイムで反映されていることがわかると思います。
        <br />
        Reactを使うことでこうした機能を実装することができることも特徴の一つです。
      </p>
      <Calculator />

      <h3 id="sub1-2-3" className="h3-toc">
        仮想DOM
      </h3>
      <p>
        Reactには仮想DOMという仕組みがライブラリ本体に備わっています。
        <br />
        仮想DOMとはその言葉の通り実際のDOMではなく、Reactが内部に持っているDOMの情報になります。
        <br />
        この仮想DOMがあることで実際のHTMLが持つDOMと比較してその差分だけを毎回HTML上に再適用をするという動きをし、必要な部分のみが更新されるので非常に高速で動作することができます。
        <br />
      </p>
    </div>
  )
}
