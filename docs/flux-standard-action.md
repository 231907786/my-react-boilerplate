## 动机
定义action的格式标准，提供代码抽象的基础

## 格式(包含的属性)
- 是一个js对象
- 必须包含 `type` 属性
- 可以包含 `error` 属性
- 可以包含 `payload` 属性
- 可以包含 `meta` 属性
- 不能包含除此之外的任何属性

### `type`
actionid，全部大写的字符串或预定义的字符串常量。例如 `'ACTION_TYPE' or const ACTION_TYPE = 'ACTION_TYPE'`

### `payload`
action承载的信息，可以是任何数据类型

### `error`
当 Promise reject , `error` 设为 `true` , 此时 `payload` 表示 reject 信息

### `meta`
存放不属于 `payload` 的元信息
