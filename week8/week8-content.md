# 第8周：换元积分法

## 学习目标
- 掌握第一类换元法（凑微分法）
- 掌握第二类换元法
- 学会选择合适的换元方式
- 能够熟练运用换元法计算不定积分和定积分

## 学习内容

### 1. 第一类换元法（凑微分法）

#### 1.1 基本思想
如果积分$\int f(x) dx$可以写成$\int g(\varphi(x)) \varphi'(x) dx$的形式，那么令$u = \varphi(x)$，则$du = \varphi'(x) dx$，积分变为$\int g(u) du$，这可能更容易计算。

#### 1.2 定理陈述
设$F(u)$是$g(u)$的一个原函数，$u = \varphi(x)$可导，则：
$$\int g(\varphi(x)) \varphi'(x) dx = F(\varphi(x)) + C$$

#### 1.3 常见的凑微分形式
1. $dx = \frac{1}{a} d(ax + b)$
2. $x dx = \frac{1}{2} d(x^2)$
3. $x^n dx = \frac{1}{n+1} d(x^{n+1})$（$n \neq -1$）
4. $\frac{1}{x} dx = d(\ln|x|)$
5. $e^x dx = d(e^x)$
6. $\sin x dx = -d(\cos x)$
7. $\cos x dx = d(\sin x)$
8. $\sec^2 x dx = d(\tan x)$
9. $\csc^2 x dx = -d(\cot x)$
10. $\frac{1}{\sqrt{1 - x^2}} dx = d(\arcsin x)$
11. $\frac{1}{1 + x^2} dx = d(\arctan x)$

#### 1.4 典型例题
1. $\int 2x e^{x^2} dx$
   - 令$u = x^2$，则$du = 2x dx$
   - 原式$= \int e^u du = e^u + C = e^{x^2} + C$

2. $\int \frac{\ln x}{x} dx$
   - 令$u = \ln x$，则$du = \frac{1}{x} dx$
   - 原式$= \int u du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C$

3. $\int \sin^2 x \cos x dx$
   - 令$u = \sin x$，则$du = \cos x dx$
   - 原式$= \int u^2 du = \frac{u^3}{3} + C = \frac{\sin^3 x}{3} + C$

### 2. 第二类换元法

#### 2.1 基本思想
如果积分$\int f(x) dx$难以直接计算，可以通过变量替换$x = \psi(t)$，将积分转化为$\int f(\psi(t)) \psi'(t) dt$，这可能更容易计算。

#### 2.2 定理陈述
设$x = \psi(t)$是单调可导函数，且$\psi'(t) \neq 0$，如果$F(t)$是$f(\psi(t)) \psi'(t)$的一个原函数，则：
$$\int f(x) dx = F(\psi^{-1}(x)) + C$$
其中$\psi^{-1}(x)$是$\psi(t)$的反函数。

#### 2.3 常见的换元方式
1. **根式代换**：当被积函数含有$\sqrt{a^2 - x^2}$、$\sqrt{a^2 + x^2}$、$\sqrt{x^2 - a^2}$时，可以分别令$x = a \sin t$、$x = a \tan t$、$x = a \sec t$。
2. **倒代换**：当被积函数的分母次数高于分子次数时，可以令$x = \frac{1}{t}$。
3. **指数代换**：当被积函数含有$e^x$时，可以令$t = e^x$。

#### 2.4 典型例题
1. $\int \sqrt{a^2 - x^2} dx$（$a > 0$）
   - 令$x = a \sin t$，则$dx = a \cos t dt$
   - 原式$= \int a \cos t \cdot a \cos t dt = a^2 \int \cos^2 t dt$
   - $= a^2 \int \frac{1 + \cos 2t}{2} dt = \frac{a^2}{2} \left(t + \frac{\sin 2t}{2}\right) + C$
   - $= \frac{a^2}{2} \arcsin \frac{x}{a} + \frac{x}{2} \sqrt{a^2 - x^2} + C$

2. $\int \frac{1}{\sqrt{x^2 + a^2}} dx$（$a > 0$）
   - 令$x = a \tan t$，则$dx = a \sec^2 t dt$
   - 原式$= \int \frac{a \sec^2 t}{a \sec t} dt = \int \sec t dt$
   - $= \ln|\sec t + \tan t| + C = \ln\left(x + \sqrt{x^2 + a^2}\right) + C$

3. $\int \frac{1}{\sqrt{x^2 - a^2}} dx$（$a > 0$）
   - 令$x = a \sec t$，则$dx = a \sec t \tan t dt$
   - 原式$= \int \frac{a \sec t \tan t}{a \tan t} dt = \int \sec t dt$
   - $= \ln|\sec t + \tan t| + C = \ln\left|x + \sqrt{x^2 - a^2}\right| + C$

### 3. 定积分的换元法

#### 3.1 定理陈述
设函数$f(x)$在区间$[a, b]$上连续，函数$x = \psi(t)$满足：
1. $\psi(\alpha) = a$，$\psi(\beta) = b$；
2. $\psi(t)$在$[\alpha, \beta]$（或$[\beta, \alpha]$）上具有连续导数；
3. 当$t$从$\alpha$变到$\beta$时，$x = \psi(t)$从$a$单调变到$b$。

则：
$$\int_a^b f(x) dx = \int_\alpha^\beta f(\psi(t)) \psi'(t) dt$$

#### 3.2 注意事项
- 换元时要同时变换积分上下限；
- 如果换元后积分上下限颠倒，积分值变号。

#### 3.3 典型例题
1. $\int_0^a \sqrt{a^2 - x^2} dx$（$a > 0$）
   - 令$x = a \sin t$，则$dx = a \cos t dt$
   - 当$x = 0$时，$t = 0$；当$x = a$时，$t = \frac{\pi}{2}$
   - 原式$= \int_0^{\pi/2} a \cos t \cdot a \cos t dt = a^2 \int_0^{\pi/2} \cos^2 t dt$
   - $= a^2 \cdot \frac{\pi}{4} = \frac{\pi a^2}{4}$

2. $\int_0^1 \frac{x}{\sqrt{1 + x^2}} dx$
   - 令$u = 1 + x^2$，则$du = 2x dx$，即$x dx = \frac{1}{2} du$
   - 当$x = 0$时，$u = 1$；当$x = 1$时，$u = 2$
   - 原式$= \frac{1}{2} \int_1^2 \frac{1}{\sqrt{u}} du = \frac{1}{2} \cdot 2[\sqrt{u}]_1^2 = \sqrt{2} - 1$

### 4. 常用积分公式补充

通过换元法可以推导出以下常用积分公式：

1. $\int \tan x dx = -\ln|\cos x| + C$
2. $\int \cot x dx = \ln|\sin x| + C$
3. $\int \sec x dx = \ln|\sec x + \tan x| + C$
4. $\int \csc x dx = \ln|\csc x - \cot x| + C$
5. $\int \frac{1}{\sqrt{a^2 - x^2}} dx = \arcsin \frac{x}{a} + C$（$a > 0$）
6. $\int \frac{1}{a^2 + x^2} dx = \frac{1}{a} \arctan \frac{x}{a} + C$（$a \neq 0$）
7. $\int \frac{1}{x^2 - a^2} dx = \frac{1}{2a} \ln\left|\frac{x - a}{x + a}\right| + C$（$a \neq 0$）
8. $\int \frac{1}{\sqrt{x^2 \pm a^2}} dx = \ln\left|x + \sqrt{x^2 \pm a^2}\right| + C$（$a > 0$）

## 学习建议
- 多做练习，熟悉各种凑微分的形式
- 掌握常见的换元技巧，特别是三角代换
- 注意换元时积分上下限的变换
- 做完积分后可以通过求导验证结果是否正确
- 总结不同类型积分的换元策略