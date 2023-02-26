import React from 'react'
import RadioButtonSample from './radioButtonSample'

export default function Content2Body() {
  return (
    <div className="body">
      <h2 id="content2-1">Reactを書いてみる</h2>
      <p>
        Reactは他のライブラリと比べると覚えること自体は少ないといわれています。
        <br />
        主に理解するべきものは以下になります。
        <br />
        ・JSX
        <br />
        ・state/props
        <br />
        ・ライフサイクル
        <br />
        それではこれらの書き方について一つずつ見ていきましょう。
      </p>
      <h2 id="content2-2">JSX</h2>
      <p>
        Reactの特徴のところでも出てきたJSXについてです。
        <br />
        先述したとおりHTMLタグのように記述を行っていくのですが、HTMLとの違いがいくつかあるのでその点を理解しましょう。
      </p>
      <h3 id="sub2-2-1">classではなくclassName</h3>
      <p>
        JavascriptとHTMLには共通している文法である"class"が存在しています。
        <br />
        Reactでは、このclassの区別をするためにHTML側の"class"を"className"と表現します。
        <br />
        また、labelタグなどで使う"for"属性も区別をつけるために"htmlFor"と記述します。
        <br />
        記述例：
      </p>
      <pre>&lt;div className="sample"&gt;&lt;/div&gt;</pre>
      <h3 id="sub2-2-2" className="h3-toc">
        HTMLタグに変数や数字などを代入するときは&#123;&#125;で囲む
      </h3>
      <p>
        HTMLタグの属性に文字列以外の値(数字、boolean、変数など)を代入する際には&#123;&#125;で囲みます。
        <br />
        記述例：
      </p>
      <pre>
        const str = 'sample';
        <br />
        &lt;div&gt; className=&#123;str&#125;
        contentEditable=&#123;true&#125;&gt;&lt;/div&gt;
      </pre>
      <h3 id="sub2-2-3" className="h3-toc">
        リストの表示方法
      </h3>
      <p>
        ulタグなどのリストの中にアイテムをループさせて表示させたい場合は以下のような記述が用いられます。
      </p>
      <pre>
        const listItems = ['りんご', 'みかん', 'メロン']
        <br />
        <br />
        &lt;ul className="list"&gt;
        <br />
        &ensp;&ensp;&#123;listItems.map&#40;item =&gt;
        &lt;li&gt;&#123;item&#125;&lt;/li&gt;&#41;&#125;
        <br />
        &lt;/ul&gt;
      </pre>
      <p>
        上記では配列のメソッドであるmapが用いられています。
        <br />
        このメソッドはlistItemsという配列をliタグ付きの配列に変換する動きをしています。
      </p>
      <h2 id="content2-3">propsとstate</h2>
      <p>ここからはpropsとstateについて見ていきましょう。</p>
      <h3 id="content2-3-1">props</h3>
      <p>
        まずはpropsについて学んでいきましょう。
        <br />
        propsとは外部から注入される変数です。以下のサンプルを見てみましょう。
        <br />
        このコードでは"RenderList"コンポーネントに配列を"listItems"として渡しています。
        <br />
        渡された"listItems"はコンポーネントがclassの場合"this.props.変数名"で取得することができます。
      </p>
      <pre>
        class RenderList extends React.Component &#123;
        <br />
        &ensp;render&#40;&#41; &#123;
        <br />
        &ensp;const items = this.props.listItems;
        <br />
        &ensp;&ensp;return &#40;&lt;ul&gt; className="list"&gt;
        <br />
        &ensp;&ensp;&ensp;&#123;items.map&#40;&#40;item&#41; =&gt;
        &lt;li&gt;&#123;item&#125;&lt;/li&gt;&#41;&#125;
        <br />
        &ensp;&ensp;&lt;/ul&gt;&#41;;
        <br />
        &ensp;&#125;
        <br />
        &#125;
        <br />
        <br />
        ReactDOM.render&#40;
        <br />
        &ensp;&lt;RenderList listItems=&#123;['りんご', 'みかん',
        'メロン']&#125; /&gt;,
        <br />
        &ensp;document.querySelector&#40;'#app'&#41;
        <br />
        &#41;;
      </pre>
      <p>
        また以下のようにコンポーネントを関数として表現することもできます。
        <br />
        その場合はpropsの記述の仕方が少し変わるのでその点も理解しておきましょう。
      </p>
      <pre>
        const RenderList = &#40;props&#41; =&gt; &#123;
        <br />
        &ensp;const &#123; items &#125; = props;
        <br />
        &ensp;return &#40;&lt;ul className="list"&gt;
        <br />
        &ensp;&ensp;&#123;items.map&#40;&#40;item&#41; =&gt;
        &lt;li&gt;&#123;item&#125;&lt;/li&gt;&#41;&#125;
        <br />
        &ensp;&lt;/ul&gt;&#41;;
        <br />
        &#125;
        <br />
        <br />
        ReactDOM.render&#40;
        <br />
        &ensp;&lt;RenderList listItems=&#123;['りんご', 'みかん',
        'メロン']&#125; /&gt;,
        <br />
        &ensp;document.querySelector&#40;'#app'&#41;
        <br />
        &#41;;
        <br />
      </pre>
      <h3 id="content2-3-2">state</h3>
      <p>
        次はstateについて見ていきましょう。
        <br />
        stateはそのコンポーネントが内部的に持っている状態のことです。
        <br />
        この状態はpropsと違って外部から注入することはできません。
        <br />
        以下のサンプルを見てみましょう。
        <br />
        このコードではラジオボタンを３つ用意して選択された項目の値が表示される動きをします。
      </p>
      <RadioButtonSample />
      <pre>
        export default function RadioButtonSample&#40;&#41; &#123;
        <br />
        &ensp;const items = ['テスト1', 'テスト2', 'テスト3']
        <br />
        <br />
        &ensp;const [val, setVal] = React.useState&#40;'テスト1'&#41;
        <br />
        <br />
        &ensp;const handleChange = e =&gt; &#123;
        <br />
        &ensp;&ensp;setVal&#40;e.target.value&#41;
        <br />
        &ensp;&#125;
        <br />
        <br />
        &ensp;return &#40;
        <br />
        &ensp;&ensp;&lt;&gt;
        <br />
        &ensp;&ensp;&ensp;&lt;div className="radio-sample"&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&lt;h4&gt;ラジオボタン&lt;/h4&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&lt;div&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&lt;div className="container"&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&#123;items.map&#40;item =&gt; &#123;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;return &#40;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;div key=&#123;item&#125;&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;input
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;id=&#123;item&#125;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;type="radio"
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;value=&#123;item&#125;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;onChange=&#123;handleChange&#125;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;checked=&#123;item === val&#125;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;label&gt;htmlFor=&#123;item&#125;&gt;&#123;item&#125;&lt;/label&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;/div&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#41;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125;&#41;&#125;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;p&gt;選択したのは「&#123;val&#125;」です。&lt;/p&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&ensp;&lt;/div&gt;
        <br />
        &ensp;&ensp;&ensp;&ensp;&lt;/div&gt;
        <br />
        &ensp;&ensp;&ensp;&lt;/div&gt;
        <br />
        &ensp;&ensp;&lt;/&gt;
        <br />
        &ensp;&#41;
        <br />
        &#125;
      </pre>
    </div>
  )
}
