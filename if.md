---
layout: doc
---

# if

説明
:   条件式1(コマンド)が実行され
    終了ステータスが0であればコマンド1が実行される。
    コマンド1が実行されなければ条件式2が実行され
    終了ステータスが0であればコマンド2が実行される。
    コマンド1も2も実行されなかった場合コマンド3が実行される。
    ```bash
    if 条件式1; then
        コマンド1
    elif 条件式2; then
        コマンド2
    else
        コマンド3
    fi
    ```

真と偽
:   終了ステータスが 0 の場合は真、0 ではない場合は偽と扱われる。
    ```sh
    test
    echo $? # 1

    test !
    echo $? # 0
    ```

条件式
: `test`コマンドや`[`コマンドを利用する。

文字列の比較
:   **str1 = str2**
    ```bash
    a="hoge"
    b="foo"
    if test $a = $b; then
        echo "a=b"
    fi

    b="hoge"
    if test $a = $b; then
        echo "a=b"
    fi
    # a=b
    ```

文字列の否定
:   **str1 != str2**
    ```bash
    if test a != b; then
        echo a is not b
    fi
    ```

ファイルやディレクトリーが存在するか
:   **-a**を用いる
    ```bash
    file=hoge
    touch $file
    if test -a $file; then
        echo "$file は存在しています"
    fi
    ```

ファイルが存在するか
:   **-f**を用いる。
    ```bash
    file=hoge
    touch $file
    if test -f $file; then
        echo "$file は存在しています"
    fi
    ```

ディレクトリーが存在するか
:   **-d**を用いる
    ```bash
    dir=dir
    touch $dir
    if test -f $dir; then
        echo "$dir は存在しています"
    fi
    ```

否定
:   **!** を用いる
    ```bash
    a="hoge"
    b="foo"
    if test ! $a = $b; then
        echo "a != b"
    fi
    ```

