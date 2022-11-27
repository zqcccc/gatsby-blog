import React, { useState, useCallback, useEffect, useReducer } from 'react'
import { Link } from 'gatsby'
import Toggle from './Toggle'
// import initWebgl from "./webgl"
import Drawer from './drawer'
import Menu from './menu'
import { useIsUseBrowser } from '../hooks/isInBrowser'
import { GlobalContext } from '../core/context'
import { Helmet } from 'react-helmet'

import sun from '../images/sun.png'
import moon from '../images/moon.png'

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme': {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default: {
      return { ...state }
    }
  }
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [globalState, dispatch] = useReducer(reducer, { theme: null })
  const isInBrowser = useIsUseBrowser()

  const [theme, setTheme] = useState(null)
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    setTheme(window.__theme)
    dispatch({ type: 'changeTheme', payload: window.__theme })
    window.__onThemeChange = () => {
      setTheme(window.__theme)
      dispatch({ type: 'changeTheme', payload: window.__theme })
      // window.CUSDIS?.setTheme(window.__theme)
    }
    // if (can.current) initWebgl(can.current)
  }, [])
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const toggleDrawerHandle = useCallback(() => setShowDrawer(v => !v), [])

  return (
    <GlobalContext.Provider value={{ state: globalState, dispatch }}>
      <div
        className="global-wrapper"
        data-is-root-path={isRootPath}
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        {isInBrowser && (
          <Drawer visible={showDrawer} onClick={toggleDrawerHandle}>
            <Menu />
          </Drawer>
        )}
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: theme === 'light' ? '#ffa8c5' : '#282c35',
            },
          ]}
        />
        <header className="global-header">
          {header}
          {theme !== null ? (
            <Toggle
              icons={{
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
              }}
              checked={theme === 'dark'}
              onChange={e =>
                window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
              }
            />
          ) : (
            <div style={{ height: '24px' }} />
          )}
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>.{` `}
          <a href="/rss.xml">Click here to see the generated RSS Feed.</a>
        </footer>
      </div>
    </GlobalContext.Provider>
  )
}

export default Layout
