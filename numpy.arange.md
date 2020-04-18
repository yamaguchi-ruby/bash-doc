---
layout: doc
---

# numpy.arange

numpy.arange(start, stop=None, step=1, dtype=None)
:   指定された間隔内で値が等間隔な配列を返す。

    [引数] start
    :   配列の範囲における最初の値。
        この値は配列に含まれる。
        stop の指定がない場合は start の値は 0 になる。

    [引数] stop
    :   配列の範囲における最後の値。
        この値は配列に含まれない(step が浮動小数点数のとき丸め誤差による例外は除く)。
        stop の指定がない場合は start の値が stop になる。

    [引数] step
    :   値の間隔。デフォルトは 1。step を設定する場合は start も設定する必要がある。

    [引数] dtype
    :   配列の型。指定がない場合は自動的に決まる。

    [戻り値] ndarray
    :   配列。

    ```python
    #!/usr/bin/env python3
    import numpy as np

    np.arange(3)
    # array([0, 1, 2])

    np.arange(3.0)
    # array([0., 1., 2.])

    np.arange(3, 7)
    # array([3, 4, 5, 6])

    np.arange(3, 7, 2)
    # array([3, 5])
    ```