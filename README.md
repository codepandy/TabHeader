### TabHeader

实现一个只有 tab 的 head 的组件，并且下面的选中条有滑动效果。

### 属性讲解

defaultHead 默认选择的 tab
heardList tab 头数组

```
[
    {
        code:'',//唯一编码
        text:'',//显示文本
        num:'',//内容的个数
    }
]
```

source 下面的列表

```
[
    {
        id: "12121",
        name: "刘医生",
        phone: "16807656551",
        doing: "10",
        error: "212",
        all: "32"
    },
]
```
里面的参数和显示效果可以根据自己的需要进行调整。