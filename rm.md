---
layout: doc
---

# rm
説明
:   ファイルやディレクトリーを削除します。
    ```bash
    touch hoge
    rm hoge
    ```

    [オプション] -r
    :   ディレクトリー内を再帰的に削除します。
        ```bash
        mkdir dir
        rm -r dir
        ```

    [オプション] -f
    :   警告を表示しません。