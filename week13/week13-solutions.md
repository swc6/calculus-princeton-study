# 第13周：练习答案

## 幂级数的收敛半径与收敛域

### 选择题
1. **答案：A**
   解析：几何级数 $\sum x^n$ 当 $|x| < 1$ 收敛，和为 $\frac{1}{1-x}$；$x = \pm 1$ 时通项不趋于零，发散。故收敛域为 $(-1, 1)$

2. **答案：B**
   解析：$\sum a_n x^{2n}$ 可看作 $\sum a_n t^n$（$t = x^2$）在 $|t| < R$ 时收敛，即 $|x^2| < R \iff |x| < \sqrt{R}$，故收敛半径为 $\sqrt{R}$

3. **答案：B**
   解析：收敛半径 $R = \lim \frac{n+1}{n} = 1$；$x = 1$ 时为调和级数，发散；$x = -1$ 时为 $\sum \frac{(-1)^n}{n}$，由莱布尼茨判别法收敛。故收敛域为 $[-1, 1)$

### 填空题
1. **答案：$R = 0$**
   解析：$R = \lim \left|\frac{a_n}{a_{n+1}}\right| = \lim \frac{n!}{(n+1)!} = \lim \frac{1}{n+1} = 0$，级数仅在 $x = 0$ 处收敛

2. **答案：$R = +\infty$**
   解析：$R = \lim \frac{1/n!}{1/(n+1)!} = \lim (n+1) = +\infty$，级数处处绝对收敛

3. **答案：$[1, 3]$**
   解析：令 $t = x - 2$，$R = \lim \frac{(n+1)^2}{n^2} = 1$，即 $|x - 2| < 1$；$x = 1$ 时为 $\sum \frac{(-1)^n}{n^2}$（$p = 2 > 1$ 的绝对收敛级数），$x = 3$ 时为 $\sum \frac{1}{n^2}$，均收敛，故收敛域为 $[1, 3]$

### 解答题
1. **解**：$R = \lim \left|\frac{a_n}{a_{n+1}}\right| = \lim \frac{2^{n+1}(n+1)}{2^n n} = 2 \lim \frac{n+1}{n} = 2$，收敛区间 $(-2, 2)$。$x = 2$ 时为 $\sum \frac{1}{n}$，发散；$x = -2$ 时为 $\sum \frac{(-1)^n}{n}$，由莱布尼茨判别法收敛。故收敛半径 $R = 2$，收敛域为 $[-2, 2)$

2. **解**：$R = \lim \left|\frac{a_n}{a_{n+1}}\right| = \lim \sqrt{\frac{n+1}{n}} = 1$，收敛区间 $(-1, 1)$。$x = 1$ 时为 $\sum \frac{(-1)^n}{\sqrt{n}}$，$\frac{1}{\sqrt{n}}$ 单调递减趋于 0，由莱布尼茨判别法收敛；$x = -1$ 时为 $\sum \frac{(-1)^n (-1)^n}{\sqrt{n}} = \sum \frac{1}{\sqrt{n}}$（$p = \frac{1}{2} \leq 1$），发散。故收敛半径 $R = 1$，收敛域为 $(-1, 1]$

3. **解**：$R = \lim \frac{n+1}{n} = 1$；$x = \pm 1$ 时通项 $n(\pm 1)^n$ 不趋于零，均发散，收敛域为 $(-1, 1)$。求和：由 $\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$（$|x| < 1$）逐项求导得 $\sum_{n=1}^{\infty} n x^{n-1} = \frac{1}{(1-x)^2}$，两边乘 $x$ 得
$$S(x) = \sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}, \qquad x \in (-1, 1)$$

4. **解**：这是公比 $r = \frac{x-1}{2}$ 的几何级数，当 $\left|\frac{x-1}{2}\right| < 1$ 即 $|x-1| < 2$ 时收敛；$x = -1$ 或 $x = 3$ 时 $|r| = 1$，通项不趋于零，发散。故收敛域为 $(-1, 3)$。和函数：
$$S(x) = \frac{1}{1 - \frac{x-1}{2}} = \frac{2}{3-x}, \qquad x \in (-1, 3)$$

5. **解**：$R = 3$。理由：幂级数在 $(-R, R)$ 内绝对收敛，在 $|x| > R$ 处发散，只有在端点 $x = \pm R$ 处才可能条件收敛。若 $R > 3$，则 $x = 3$ 在收敛区间内部，级数在 $x = 3$ 处应绝对收敛，与条件收敛矛盾；若 $R < 3$，则 $x = 3$ 处级数应发散，也矛盾。故只能 $R = 3$

6. **解**：$R = \lim \frac{(n+1)^2}{n^2} = 1$，收敛区间 $(-1, 1)$。$x = 1$ 时为 $\sum \frac{1}{n^2}$，$x = -1$ 时为 $\sum \frac{(-1)^n}{n^2}$，两者均绝对收敛（$p = 2 > 1$）。故收敛域为 $[-1, 1]$

## 泰勒公式与麦克劳林级数

### 选择题
1. **答案：A**
   解析：拉格朗日型余项为 $R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$，其中 $\xi$ 介于 $x_0$ 与 $x$ 之间

2. **答案：A**
   解析：$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$，$x^{10}$ 对应 $n = 10$，系数为 $\frac{1}{10!}$

3. **答案：B**
   解析：收敛半径 $R = 1$；$x = 1$ 时为交错级数 $\sum \frac{(-1)^{n-1}}{n}$，收敛；$x = -1$ 时为 $\sum \frac{-1}{n}$，发散。故收敛域为 $(-1, 1]$

### 填空题
1. **答案：$\frac{1}{120}$**
   解析：$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$，$x^5$ 项系数为 $\frac{1}{5!} = \frac{1}{120}$

2. **答案：$\frac{1}{24}$**
   解析：$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$，$x^4$ 项系数为 $\frac{1}{4!} = \frac{1}{24}$

3. **答案：$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$**
   解析：$e^x$ 各阶导数在 $0$ 处均为 1，三阶泰勒多项式为 $T_3(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$

### 解答题
1. **解**：$\frac{1}{1-x}$ 是公比 $x$ 的几何级数之和，故
$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + \cdots, \qquad |x| < 1$$
收敛域为 $(-1, 1)$

2. **解**：在 $\frac{1}{1-t} = \sum_{n=0}^{\infty} t^n$（$|t| < 1$）中以 $t = -x^2$ 替换，得
$$\frac{1}{1+x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - \cdots, \qquad |x| < 1$$
收敛域为 $(-1, 1)$

3. **解**：先展开导函数：$\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n$（$|x| < 1$）。逐项积分（并注意 $\ln(1+0) = 0$）：
$$\ln(1+x) = \int_0^x \frac{dt}{1+t} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{n+1}}{n+1} = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$$
逐项积分后收敛半径不变（$R = 1$），但需验证端点：$x = 1$ 时为交错级数 $\sum \frac{(-1)^{n-1}}{n}$，收敛；$x = -1$ 时为 $-\sum \frac{1}{n}$，发散。故
$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots, \qquad -1 < x \leq 1$$

4. **解**：在 $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ 中以 $2x$ 替换 $x$：
$$e^{2x} = \sum_{n=0}^{\infty} \frac{(2x)^n}{n!} = 1 + 2x + \frac{4x^2}{2!} + \frac{8x^3}{3!} + \cdots, \qquad -\infty < x < +\infty$$

5. **解**：在 $\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ 中以 $2x$ 替换 $x$：
$$\sin 2x = \sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n+1}}{(2n+1)!} = 2x - \frac{(2x)^3}{3!} + \frac{(2x)^5}{5!} - \cdots, \qquad -\infty < x < +\infty$$

6. **解**：$x e^x = x \sum_{n=0}^{\infty} \frac{x^n}{n!} = \sum_{n=0}^{\infty} \frac{x^{n+1}}{n!} = x + x^2 + \frac{x^3}{2!} + \frac{x^4}{3!} + \cdots$，对一切 $x$ 收敛（幂级数乘以 $x$ 不改变收敛域）

## 泰勒级数的应用（求和、近似计算、求极限）

### 选择题
1. **答案：B**
   解析：由 $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$，令 $x = -1$，得 $\sum_{n=0}^{\infty} \frac{(-1)^n}{n!} = e^{-1} = \frac{1}{e}$

2. **答案：A**
   解析：由 $\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n}$，其收敛域为 $(-1, 1]$，故和函数为 $\ln(1+x)$，$x \in (-1, 1]$

3. **答案：B**
   解析：将 $\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$ 中的 $x$ 保持不变，此即 $\cos x$ 的麦克劳林级数，对一切 $x$ 收敛

### 填空题
1. **答案：$e$**
   解析：在 $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$ 中令 $x = 1$

2. **答案：$\ln 2$**
   解析：在 $\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n}$（$-1 < x \leq 1$）中令 $x = 1$

3. **答案：$\cos\frac{1}{2}$**
   解析：$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$，令 $x = \frac{1}{2}$：$\sum \frac{(-1)^n}{2^{2n}(2n)!} = \sum \frac{(-1)^n}{4^n(2n)!} = \cos\frac{1}{2}$

### 解答题
1. **解**：由第 2 节例题，$\sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}$（$|x| < 1$）。令 $x = \frac{1}{2}$：
$$\sum_{n=1}^{\infty} \frac{n}{2^n} = \frac{1/2}{(1 - 1/2)^2} = \frac{1/2}{1/4} = 2$$

2. **解**：由 $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$，得 $x - \sin x = \frac{x^3}{6} - \frac{x^5}{120} + \cdots = \frac{x^3}{6} + o(x^3)$，故
$$\lim_{x \to 0} \frac{x - \sin x}{x^3} = \lim_{x \to 0} \frac{\frac{x^3}{6} + o(x^3)}{x^3} = \frac{1}{6}$$

3. **解**：$\frac{1}{x} = \frac{1}{1 + (x-1)}$，在 $\frac{1}{1+t} = \sum_{n=0}^{\infty} (-1)^n t^n$（$|t| < 1$）中以 $t = x - 1$ 替换：
$$\frac{1}{x} = \sum_{n=0}^{\infty} (-1)^n (x-1)^n = 1 - (x-1) + (x-1)^2 - \cdots$$
要求 $|x - 1| < 1$，故收敛域为 $0 < x < 2$

4. **解**：$\ln x = \ln\left[1 + (x-1)\right]$，由 $\ln(1+t) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} t^n}{n}$（$-1 < t \leq 1$）中以 $t = x - 1$ 替换：
$$\ln x = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}(x-1)^n}{n} = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \cdots$$
要求 $-1 < x - 1 \leq 1$，故收敛域为 $0 < x \leq 2$

5. **解**：注意到 $\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$，而所给级数即 $\sum_{n=0}^{\infty} \frac{(-1)^n \left(\frac{\pi}{4}\right)^{2n+1}}{(2n+1)!}$，故其和为
$$\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2}$$

6. **解**：由 $(1+x)^{1/2} = 1 + \frac{1}{2}x + \frac{\frac{1}{2}\left(\frac{1}{2}-1\right)}{2!}x^2 + \cdots = 1 + \frac{x}{2} - \frac{x^2}{8} + \cdots$（$|x| < 1$）。取 $x = 0.02$：
$$\sqrt{1.02} \approx 1 + \frac{0.02}{2} - \frac{(0.02)^2}{8} = 1 + 0.01 - 0.00005 = 1.00995$$

## 综合应用题

1. **解**：由 $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$（$|x| < 1$），两边逐项求导：
$$\frac{1}{(1-x)^2} = \left(\frac{1}{1-x}\right)' = \sum_{n=1}^{\infty} n x^{n-1} = \sum_{n=0}^{\infty} (n+1) x^n$$
逐项求导不改变收敛半径，故收敛域仍为 $(-1, 1)$

2. **解**：先求 $\sum_{n=1}^{\infty} n(n+1)x^n$（$|x| < 1$）。由 $\sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}$，逐项求导得 $\sum_{n=1}^{\infty} n^2 x^{n-1} = \frac{1+x}{(1-x)^3}$，故 $\sum_{n=1}^{\infty} n^2 x^n = \frac{x(1+x)}{(1-x)^3}$。于是
$$\sum_{n=1}^{\infty} n(n+1) x^n = \sum_{n=1}^{\infty} n^2 x^n + \sum_{n=1}^{\infty} n x^n = \frac{x(1+x)}{(1-x)^3} + \frac{x}{(1-x)^2} = \frac{x(1+x) + x(1-x)}{(1-x)^3} = \frac{2x}{(1-x)^3}$$
令 $x = \frac{1}{2}$：
$$\sum_{n=1}^{\infty} \frac{n(n+1)}{2^n} = \frac{2 \cdot \frac{1}{2}}{\left(\frac{1}{2}\right)^3} = \frac{1}{\frac{1}{8}} = 8$$

3. **解**：由第 2 节结果，$\frac{1}{1+x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n}$（$|x| < 1$）。逐项积分（注意 $\arctan 0 = 0$）：
$$\arctan x = \int_0^x \frac{dt}{1+t^2} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$$
验证端点：$x = \pm 1$ 时均为交错级数 $\sum \frac{(\pm 1)^{2n+1}(-1)^n}{2n+1}$，$\frac{1}{2n+1}$ 单调递减趋于 0，收敛。故收敛域为 $[-1, 1]$

4. **解**：在第 3 题的展开式 $\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$（$-1 \leq x \leq 1$）中令 $x = 1$：
$$\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \arctan 1 = \frac{\pi}{4}$$

5. **解**：$e^x = e \cdot e^{x-1}$，在 $e^t = \sum_{n=0}^{\infty} \frac{t^n}{n!}$ 中以 $t = x - 1$ 替换：
$$e^x = e \sum_{n=0}^{\infty} \frac{(x-1)^n}{n!} = e\left[1 + (x-1) + \frac{(x-1)^2}{2!} + \cdots\right], \qquad -\infty < x < +\infty$$

6. **解**：由 $e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots$，得 $e^x - 1 - x = \frac{x^2}{2} + o(x^2)$，故
$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{\frac{x^2}{2} + o(x^2)}{x^2} = \frac{1}{2}$$

7. **解**：由 $\cos^2 x = \frac{1 + \cos 2x}{2}$ 及 $\cos 2x = \sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!}$（一切 $x$），得
$$\cos^2 x = \frac{1}{2} + \frac{1}{2}\sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!} = \frac{1}{2} + \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n-1} x^{2n}}{(2n)!} = 1 + \sum_{n=1}^{\infty} \frac{(-1)^n 2^{2n-1} x^{2n}}{(2n)!}$$
即 $\cos^2 x = 1 - x^2 + \frac{x^4}{3} - \cdots$，收敛域为 $(-\infty, +\infty)$

8. **解**：由 $e^t = \sum_{n=0}^{\infty} \frac{t^n}{n!}$ 以 $t = -x^2$ 替换：$e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \cdots$。取前两项积分：
$$\int_0^{0.1} e^{-x^2} dx \approx \int_0^{0.1} (1 - x^2) dx = \left[x - \frac{x^3}{3}\right]_0^{0.1} = 0.1 - \frac{0.001}{3} \approx 0.099667 \approx 0.0997$$
（被舍去的下一项贡献约为 $\int_0^{0.1} \frac{x^4}{2} dx = \frac{(0.1)^5}{10} = 10^{-6}$，可忽略）
