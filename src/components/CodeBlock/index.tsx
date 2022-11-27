import React, { useCallback, useMemo, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
// import Prism from 'prismjs'
import './index.less'
import { copy } from '../../utils/helpers'

export default props => {
  const className = props.children.props.className || ''

  const matches = useMemo(
    () => className.match(/language-(?<lang>[^\{\}]+)(\{(?<high>(.+))\})?/),
    [className]
  )

  const highLightLine = useMemo(() => {
    if (matches?.groups?.high) {
      return matches.groups.high.split(',').reduce((obj, cur) => {
        let [from, end] = cur.split('-')
        console.log('end: ', end)
        console.log('from: ', from)
        from = parseInt(from)
        end = parseInt(end ?? from)
        for (let i = from; i <= end; i++) {
          obj[i] = true
        }
        return obj
      }, {})
    } else {
      return {}
    }
  }, matches)

  console.log('highLightLine: ', highLightLine)

  const code = props.children.props.children.trim()

  const [copied, setCopied] = useState(false)

  const copyHandle = useCallback(() => {
    copy(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [])

  return (
    <div className="gatsby-highlight">
      <button
        className={`gatsby-remark-prismjs-copy-button ${copied && 'copied'}`}
        onClick={copyHandle}
      >
        {copied ? 'Copied' : ' Copy '}
      </button>
      <Highlight
        {...defaultProps}
        code={code}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
        theme={theme}
        // Prism={Prism}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            <code className={className}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  className={
                    highLightLine[i + 1] && 'gatsby-highlight-code-line'
                  }
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}
