---
layout: doc
---

# while

説明
:   条件(コマンド)の終了ステータスが 0 である間コマンドが繰り返されます。

    ```bash
    while 条件; do
        コマンド
    done
    ```

    無限 hogehoge
    :   
        ```bash
        while true; do # true は終了ステータスが 0 であるコマンド
            echo hogehoge
        done
        ```

# break
    
説明
:   ループを抜ける

    10回 hogehoge する
    :   
        ```bash
        i=1
        while true; do
            echo $i hogehoge
            if test $i -ge 10; then
                break
            fi
            i=$(($i+1))
        done
        ```

# continue

説明
:   以降のコマンドをスキップし先頭に戻る。

    3 の倍数のときhogehoge する
    :   
        ```bash
        i=0
        while true; do
            i=$(($i+1))
            if test ! 0 -eq $(($i % 3)); then
                continue
            fi
            echo $i hogehoge
        done
        ```