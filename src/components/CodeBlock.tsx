import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/palenight'
// import Prism from 'prismjs'

export default props => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <div className="gatsby-highlight">
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
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
                <div key={i} {...getLineProps({ line, key: i })}>
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
