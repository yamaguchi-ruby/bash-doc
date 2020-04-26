---
layout: doc
---

# mkdir
説明
:   ディレクトリーを作成します。
    ```bash
    mkdir dir
    ```

    [オプション] -p
    :   親ディレクトリーもまとめて作成し、当該ディレクトリーが存在しない場合に作成します。
        ```bash
        mkdir -p dir/hoge
        # ./ に dir/ と dir/hoge/ が作成される。
        ```