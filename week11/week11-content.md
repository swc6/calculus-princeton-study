# 第11周：反常积分

## 学习目标
- 理解反常积分的概念与敛散性的定义
- 掌握无穷区间上反常积分的计算方法
- 掌握无界函数（瑕积分）的计算方法
- 牢记 p-积分与 q-积分的收敛性结论
- 学会用比较判别法与极限比较判别法判断敛散性

## 学习内容

### 1. 无穷区间上的反常积分

#### 1.1 定义
定积分要求积分区间有限、被积函数有界。破坏这两条的积分称为**反常积分**（广义积分）。先讨论无穷区间。

设 $f(x)$ 在 $[a, \infty)$ 上连续，定义：
$$\int_a^\infty f(x) dx = \lim_{t \to \infty} \int_a^t f(x) dx$$
若极限存在（为有限数），称反常积分**收敛**；否则称**发散**。

类似地：
$$\int_{-\infty}^b f(x) dx = \lim_{t \to -\infty} \int_t^b f(x) dx$$

对 $\int_{-\infty}^{\infty} f(x) dx$，必须**先拆分再判断**：任取 $c$，
$$\int_{-\infty}^{\infty} f(x) dx = \int_{-\infty}^c f(x) dx + \int_c^\infty f(x) dx$$
两个积分都收敛时整体才收敛；只要有一个发散，整体就发散。

#### 1.2 典型例题

例：计算 $\int_1^\infty \frac{1}{x^2} dx$。
- $\int_1^t \frac{1}{x^2} dx = \left[-\frac{1}{x}\right]_1^t = 1 - \frac{1}{t}$；
- $\lim_{t \to \infty}\left(1 - \frac{1}{t}\right) = 1$，故积分收敛于 $1$。

例：判断 $\int_1^\infty \frac{1}{x} dx$ 的敛散性。
- $\int_1^t \frac{1}{x} dx = \ln t \to \infty$（$t \to \infty$），故发散。

例：计算 $\int_0^\infty e^{-x} dx = \lim_{t \to \infty}(1 - e^{-t}) = 1$。

例：判断 $\int_{-\infty}^{\infty} \frac{x}{1 + x^2} dx$ 的敛散性。
- 被积函数是奇函数，但不能由"对称性"得 0；
- 拆分：$\int_0^\infty \frac{x}{1 + x^2} dx = \frac{1}{2}\lim_{t \to \infty}\ln(1 + t^2) = \infty$，发散；
- 由定义，整体发散。（对比：$\int_{-\infty}^{\infty} \frac{1}{1 + x^2} dx = [\arctan x]_{-\infty}^{\infty} = \pi$ 收敛，因为两端分别收敛。）

### 2. 无界函数的反常积分（瑕积分）

#### 2.1 定义
若 $f(x)$ 在 $(a, b]$ 上连续，而在 $x = a$ 附近无界（$a$ 称为**瑕点**），定义：
$$\int_a^b f(x) dx = \lim_{t \to a^+} \int_t^b f(x) dx$$
极限存在则收敛，否则发散。瑕点在右端点 $b$ 或区间内部时类似处理：瑕点在内部时必须把区间拆成两段分别判断。

#### 2.2 典型例题

例：计算 $\int_0^1 \frac{1}{\sqrt{x}} dx$。
- 瑕点 $x = 0$。$\int_t^1 x^{-1/2} dx = 2 - 2\sqrt{t}$，$t \to 0^+$ 时极限为 $2$，收敛于 $2$。

例：判断 $\int_0^1 \frac{1}{x^2} dx$ 的敛散性。
- $\int_t^1 \frac{1}{x^2} dx = \frac{1}{t} - 1 \to \infty$（$t \to 0^+$），发散。

例：判断 $\int_{-1}^1 \frac{1}{x^2} dx$ 的敛散性。
- 瑕点 $x = 0$ 在区间内部，必须拆分为 $\int_{-1}^0 + \int_0^1$；
- 两段都发散（同上例），故整体发散，不能直接用原函数 $-\frac{1}{x}$ 代入上下限。

例：计算 $\int_0^1 \ln x\, dx$。
- $\int_t^1 \ln x\, dx = [x\ln x - x]_t^1 = -1 - t\ln t + t$；
- $\lim_{t \to 0^+} t\ln t = 0$，故积分收敛于 $-1$。（无界函数的积分也可能收敛且取负值。）

### 3. p-积分与 q-积分

#### 3.1 p-积分（无穷区间）
$$\int_1^\infty \frac{1}{x^p} dx \begin{cases} \text{收敛于 } \dfrac{1}{p - 1}, & p > 1 \\ \text{发散}, & p \leq 1 \end{cases}$$
推导：当 $p \neq 1$ 时 $\int_1^t x^{-p} dx = \frac{t^{1-p} - 1}{1 - p}$；$t \to \infty$ 时 $t^{1-p} \to 0$ 当且仅当 $1 - p < 0$，即 $p > 1$，此时极限为 $\frac{1}{p-1}$。$p = 1$ 时为 $\ln t \to \infty$，发散。

#### 3.2 q-积分（瑕积分）
$$\int_0^1 \frac{1}{x^q} dx \begin{cases} \text{收敛于 } \dfrac{1}{1 - q}, & q < 1 \\ \text{发散}, & q \geq 1 \end{cases}$$
推导：$\int_t^1 x^{-q} dx = \frac{1 - t^{1-q}}{1 - q}$（$q \neq 1$）；$t \to 0^+$ 时 $t^{1-q} \to 0$ 当且仅当 $1 - q > 0$，即 $q < 1$，此时极限为 $\frac{1}{1-q}$。$q = 1$ 时为 $-\ln t \to \infty$，发散。

记忆对照：**无穷远处看 $p$：$p > 1$ 收敛；有限瑕点处看 $q$：$q < 1$ 收敛**。方向恰好相反。

### 4. 比较判别法

#### 4.1 直接比较判别法
设当 $x$ 充分大（或 $x$ 充分接近瑕点）时 $0 \leq g(x) \leq f(x)$：
- 若 $\int f(x) dx$ 收敛，则 $\int g(x) dx$ 收敛；
- 若 $\int g(x) dx$ 发散，则 $\int f(x) dx$ 发散。

（"大的收敛则小的收敛；小的发散则大的发散。"）

#### 4.2 极限比较判别法
设 $f(x) > 0$，$g(x) > 0$，且 $\lim \frac{f(x)}{g(x)} = L$：
- 若 $0 < L < \infty$，则 $\int f$ 与 $\int g$ 同敛散；
- 若 $L = 0$ 且 $\int g$ 收敛，则 $\int f$ 收敛；
- 若 $L = \infty$ 且 $\int g$ 发散，则 $\int f$ 发散。

实用方法：在 $x \to \infty$ 时抓"主导项"，与 $\frac{1}{x^p}$ 比较（$p$ 等于分子分母最高次幂之差）；在瑕点 $x \to 0^+$（或 $x \to a^+$）时与 $\frac{1}{x^q}$ 比较（$q$ 等于瑕点附近分子分母的幂之差）。

#### 4.3 典型例题

例：判断 $\int_1^\infty \frac{1}{x^2 + 1} dx$ 的敛散性。
- 与 $g(x) = \frac{1}{x^2}$ 比较：$\lim_{x \to \infty} \frac{1/(x^2+1)}{1/x^2} = \lim \frac{x^2}{x^2 + 1} = 1$；
- $p = 2 > 1$ 时 $\int_1^\infty \frac{1}{x^2} dx$ 收敛，故原积分收敛。（实际上可算出其值为 $\frac{\pi}{4}$。）

例：判断 $\int_1^\infty \frac{1}{\sqrt{x^3 + 1}} dx$ 的敛散性。
- $x \to \infty$ 时 $\frac{1}{\sqrt{x^3 + 1}} \sim \frac{1}{x^{3/2}}$，$p = \frac{3}{2} > 1$，收敛。

例：判断 $\int_0^1 \frac{1}{\sqrt{x + x^3}} dx$ 的敛散性。
- $x \to 0^+$ 时 $\frac{1}{\sqrt{x + x^3}} \sim \frac{1}{\sqrt{x}}$，$q = \frac{1}{2} < 1$，收敛。

例：判断 $\int_2^\infty \frac{1}{x \ln x} dx$ 的敛散性。
- 令 $u = \ln x$，$\int_2^t \frac{dx}{x\ln x} = \ln(\ln t) - \ln(\ln 2) \to \infty$，发散；
- 注意它比 $\frac{1}{x}$ 还多一个 $\ln x$，但仍然发散——比 $\frac{1}{x}$ "衰减得慢"的量在无穷远处不足以收敛。

例：判断 $\int_0^\infty e^{-x^2} dx$ 的敛散性。
- $e^{-x^2}$ 没有初等原函数，只能用判别法：当 $x \geq 1$ 时 $x^2 \geq x$，故 $0 \leq e^{-x^2} \leq e^{-x}$；
- $\int_1^\infty e^{-x} dx = e^{-1}$ 收敛，故原积分收敛。（在 $[0, 1]$ 上被积函数连续，不产生问题。）

### 5. 收敛反常积分的计算综合

例：计算 $\int_0^\infty x e^{-x} dx$。
- 用分部积分：$\int_0^t xe^{-x} dx = [-xe^{-x}]_0^t + \int_0^t e^{-x} dx = -te^{-t} + (1 - e^{-t})$；
- $t \to \infty$ 时 $te^{-t} \to 0$，故积分收敛于 $1$。

例：计算 $\int_0^\infty e^{-x}\sin x\, dx$。
- 利用第9周结果 $\int e^{-x}\sin x\, dx = -\frac{e^{-x}}{2}(\sin x + \cos x)$；
- 代入上下限并取极限，得积分收敛于 $\frac{1}{2}$。

例：计算 $\int_0^1 \frac{x}{\sqrt{1 - x^2}} dx$。
- 瑕点 $x = 1$。原函数为 $-\sqrt{1 - x^2}$；
- $\lim_{t \to 1^-}\left(-\sqrt{1 - t^2}\right) - (-1) = 0 + 1 = 1$，收敛于 $1$。

## 学习建议
- 反常积分的处理流程固定：先取有限区间积分，再取极限；书写时要体现 $\lim$，不能直接代入无穷限
- p-积分与 q-积分的结论必须熟记，它们是比较判别法的"标尺"
- 判断敛散性时先找瑕点（分母为零的点、$\ln$ 的零点等），瑕点在区间内部时务必拆分区间
- 比较时抓住"主导项"：无穷远处看最高次幂之差，瑕点附近看最低次幂之差
- 极限不存在不等于极限为无穷大（如振荡发散），两种情况都称发散
- 收敛的反常积分才谈得上求值；求值后可用数值估算（如 $\frac{\pi}{4} + \frac{\ln 2}{2} \approx 1.13$）粗略检验
