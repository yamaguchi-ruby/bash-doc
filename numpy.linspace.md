---
layout: doc
---

# numpy.linspace

numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0)
:   指定された間隔内で値が等間隔な配列を返す。

    [引数] start 
    : 配列の先頭の値。

    [引数] stop
    : 配列の最後の値。

    [引数] num
    : 要素数。デフォルトは 50。
    
    [引数] endpoint
    : False の場合は配列に stop は含まない。デフォルトは True。

    [引数] restep
    : True の場合、配列と間隔のタプルを返す。デフォルトは False。

    [引数] dtype
    : 配列の型。

    [引数] axis
    : start または stop が配列の場合に指定しても良い。軸の向きを変える場合は -1 を指定する。

    [戻り値] ndarray
    : 配列。

    [戻り値] tuple
    : 配列と間隔のタプル。

    ```python
    #!/usr/bin/env python3
    import numpy as np

    np.linspace(2.0, 3.0, num=5)
    # array([2.  , 2.25, 2.5 , 2.75, 3.  ])

    np.linspace(2.0, 3.0, num=5, endpoint=False)
    # array([2. , 2.2, 2.4, 2.6, 2.8])

    np.linspace(2.0, 3.0, num=5, retstep=True)
    # (array([2.  , 2.25, 2.5 , 2.75, 3.  ]), 0.25)
    ```