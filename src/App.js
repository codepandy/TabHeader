import React, { Component } from "react";
import styles from "./App.less";
import TabHeader from "./tabheader";

class App extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <TabHeader
          defaultHead="abc"
          heardList={[
            { code: "abc", text: "较长的名字数量", num: "10" },
            { code: "abcd", text: "男人", num: "101" },
            { code: "abce1", text: "美女数", num: "121" }
          ]}
          source={[
            {
              id: "12121",
              name: "刘医生",
              phone: "16807656551",
              doing: "10",
              error: "212",
              all: "32"
            },
            {
              id: "1211",
              name: "张无忌",
              phone: "16807656551",
              doing: "10",
              error: "22",
              all: "322"
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
