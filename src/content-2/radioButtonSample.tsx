import React from 'react'

export default function RadioButtonSample() {
  const items = ['テスト1', 'テスト2', 'テスト3']

  const [val, setVal] = React.useState('テスト1')

  const handleChange = e => {
    setVal(e.target.value)
  }

  return (
    <>
      <div className="radio-sample">
        <h4>ラジオボタン</h4>
        <div>
          <div className="container">
            {items.map(item => {
              return (
                <div key={item}>
                  <input
                    id={item}
                    type="radio"
                    value={item}
                    onChange={handleChange}
                    checked={item === val}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              )
            })}
            <p>選択したのは「{val}」です。</p>
          </div>
        </div>
      </div>
    </>
  )
}
