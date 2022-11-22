import { Component } from 'react'
interface Props {
  children: JSX.Element[],
}
export const SideBySide = (props: Props) => {
  const { children } = props;
  return (
    <div style={styles.wrapper}>
      <section style={styles.left}>
        {children[0]}
      </section>
      <section style={styles.right}>
        {children[1]}
      </section>
    </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
  },
  left: {
    flex: "1 1 700px",
  },
  right: {
    flex: "0 0 350px",
  }
}