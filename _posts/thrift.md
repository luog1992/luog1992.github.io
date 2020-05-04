
https://juejin.im/post/5de8e38ef265da33d7441913


## Thrift文件的组成

### Header
  * Include
  * CppInclude
  * Namespace

### Definition
  * Const
  * Typedef
  * Enum
  * Struct
  * Union

Exception

```
exception Error {
    1: required i8 Code,
    2: string Msg
}

service ExampleService {
    string GetName() throws (1: Error err),
}
```

Service
