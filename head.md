---
layout: doc
---

# head
説明
:   ファイルの先頭から数行を表示する。
    デフォルトでは10行表示する。

    [オプション] -n
    :   先頭からの行数
        ```bash
        ls -1 / > root
        head -n 3 root
        # bin
        # boot
        # cdrom
        ```

    [オプション] -c
    :   先頭からのバイト数
        ```bash
        head -c 30 root
        # bin
        # boot
        # cdrom
        # dev
        # etc
        # home
        # li
        ```

    [オプション] -v
    :   ファイル名を表示する

    [オプション] -q
    :   ファイル名を表示しない
