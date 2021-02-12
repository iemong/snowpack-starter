import React, { useState, useEffect } from "react"
import logo from "~/assets/images/logo.svg"
import styles from "./style.module.css"

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} alt="logo" className={styles.AppLogo} />
        <div className="flex">
          <p>
            Page has been open for <code>{count}</code> seconds.
          </p>
          <p>hoge fuga piyo</p>
        </div>
      </header>
    </div>
  )
}

export default App
