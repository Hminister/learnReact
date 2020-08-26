import React, { PureComponent } from 'react'
import styles from './app.module.css'
import styled from 'styled-components'
const HomeWraper = styled.div`
 color：blue;
`
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      titleColor: 'red',
    }
  }

  render() {
    return (
      <HomeWraper>
        <h2 className={styles.title}>我是App标题</h2>
        <p>我是一段文字描述</p>
      </HomeWraper>
    )
  }
}
