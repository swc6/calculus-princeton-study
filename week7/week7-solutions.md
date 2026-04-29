# 第7周：练习答案

## 定积分的概念和性质

### 选择题
1. **答案：C**
   解析：定积分的值与积分变量的记号无关，改变积分变量的名称不影响积分值。

2. **答案：B**
   解析：定积分是一个确定的数值，与积分变量无关。

3. **答案：C**
   解析：可积函数不一定连续，例如分段函数可能在有限个点不连续但仍可积。

### 填空题
1. **答案：0**
   解析：积分上下限相等时，积分值为0。

2. **答案：$\int_a^c f(x) dx$**
   解析：根据定积分的区间可加性。

3. **答案：0**
   解析：奇函数在对称区间上的积分等于0。

### 解答题
1. **解**：将区间$[0, 1]$分成$n$等分，每个小区间长度为$\Delta x_i = \frac{1}{n}$，取$\xi_i = \frac{i}{n}$，则：
   $$\int_0^1 x^2 dx = \lim_{n \to \infty} \sum_{i=1}^n \left(\frac{i}{n}\right)^2 \cdot \frac{1}{n} = \lim_{n \to \infty} \frac{1}{n^3} \sum_{i=1}^n i^2 = \lim_{n \to \infty} \frac{n(n+1)(2n+1)}{6n^3} = \frac{1}{3}$$

2. **解**：$\int_{-1}^1 \sqrt{1 - x^2} dx$表示上半圆$y = \sqrt{1 - x^2}$的面积，即半径为1的圆面积的一半，所以$\int_{-1}^1 \sqrt{1 - x^2} dx = \frac{\pi}{2}$。

3. **解**：在$[0, 1]$上，$x \geq x^2$，所以$\int_0^1 x dx \geq \int_0^1 x^2 dx$。

4. **解**：在$[0, \pi]$上，$0 \leq \sin x \leq 1$，所以$0 \cdot (\pi - 0) \leq \int_0^\pi \sin x dx \leq 1 \cdot (\pi - 0)$，即$0 \leq \int_0^\pi \sin x dx \leq \pi$。

5. **证明**：令$t = 1 - x$，则当$x = 0$时，$t = 1$；当$x = 1$时，$t = 0$；$dx = -dt$。所以：
   $$\int_0^1 f(x) dx = \int_1^0 f(1 - t)(-dt) = \int_0^1 f(1 - t) dt = \int_0^1 f(1 - x) dx$$

## 不定积分

### 选择题
1. **答案：C**
   解析：不定积分的导数等于被积函数。

2. **答案：B**
   解析：$\int x^2 dx = \frac{x^3}{3} + C$。

3. **答案：B**
   解析：$\int \frac{1}{x} dx = \ln|x| + C$，要注意绝对值。

### 填空题
1. **答案：$e^x + C$**
   解析：基本积分公式。

2. **答案：$-\cos x + C$**
   解析：基本积分公式。

3. **答案：$\arctan x + C$**
   解析：基本积分公式。

### 解答题
1. **解**：$\int (x^3 + 2x^2 - 3x + 1) dx = \frac{x^4}{4} + \frac{2x^3}{3} - \frac{3x^2}{2} + x + C$

2. **解**：$\int (e^x + \cos x) dx = e^x + \sin x + C$

3. **解**：$\int \left(\frac{1}{x} + \frac{1}{x^2}\right) dx = \ln|x| - \frac{1}{x} + C$

4. **解**：$\int (\sec^2 x + \csc^2 x) dx = \tan x - \cot x + C$

5. **解**：$f(x) = \int (2x + 1) dx = x^2 + x + C$，由$f(0) = 1$得$C = 1$，所以$f(x) = x^2 + x + 1$。

## 微积分基本定理

### 选择题
1. **答案：A**
   解析：由变上限积分求导公式，$\Phi'(x) = \sin x$。

2. **答案：A**
   解析：变上限积分对上限求导等于被积函数在该点的值。

3. **答案：A**
   解析：牛顿-莱布尼茨公式。

### 填空题
1. **答案：$2x \sin(x^2)$**
   解析：$\frac{d}{dx} \int_0^{x^2} \sin t dt = \sin(x^2) \cdot 2x$。

2. **答案：$\frac{1}{2}$**
   解析：$\int_0^1 x dx = \left[\frac{x^2}{2}\right]_0^1 = \frac{1}{2}$。

3. **答案：0**
   解析：奇函数在对称区间上的积分等于0。

### 解答题
1. **解**：$\frac{d}{dx} \int_1^x \ln t dt = \ln x$

2. **解**：$\frac{d}{dx} \int_x^1 e^{t^2} dt = -\frac{d}{dx} \int_1^x e^{t^2} dt = -e^{x^2}$

3. **解**：$\frac{d}{dx} \int_0^{\sin x} t^2 dt = (\sin x)^2 \cdot \cos x = \sin^2 x \cos x$

## 定积分的计算

### 选择题
1. **答案：B**
   解析：$\int_0^2 x dx = \left[\frac{x^2}{2}\right]_0^2 = 2$。

2. **答案：C**
   解析：$\int_0^\pi \sin x dx = [-\cos x]_0^\pi = -(-1) - (-1) = 2$。

3. **答案：A**
   解析：$\int_1^e \frac{1}{x} dx = [\ln x]_1^e = 1 - 0 = 1$。

### 填空题
1. **答案：$\frac{1}{3}$**
   解析：$\int_0^1 x^2 dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}$。

2. **答案：1**
   解析：$\int_{-1}^1 |x| dx = 2 \int_0^1 x dx = 2 \cdot \frac{1}{2} = 1$。

3. **答案：$e^2 - 1$**
   解析：$\int_0^2 e^x dx = [e^x]_0^2 = e^2 - 1$。

### 解答题
1. **解**：$\int_0^2 (x^2 - 1) dx = \left[\frac{x^3}{3} - x\right]_0^2 = \left(\frac{8}{3} - 2\right) - 0 = \frac{2}{3}$

2. **解**：$\int_{-1}^1 (x^3 + x) dx = 0$（因为是奇函数）

3. **解**：$\int_0^{\pi/2} \cos x dx = [\sin x]_0^{\pi/2} = 1 - 0 = 1$

4. **解**：$\int_1^2 \left(\frac{1}{x^2} + \frac{1}{x}\right) dx = \left[-\frac{1}{x} + \ln x\right]_1^2 = \left(-\frac{1}{2} + \ln 2\right) - (-1 + 0) = \frac{1}{2} + \ln 2$

5. **解**：$\int_0^1 e^{2x} dx = \left[\frac{e^{2x}}{2}\right]_0^1 = \frac{e^2}{2} - \frac{1}{2} = \frac{e^2 - 1}{2}$

6. **解**：$\int_{-2}^2 \sqrt{4 - x^2} dx$表示上半圆的面积，半径为2，所以$\int_{-2}^2 \sqrt{4 - x^2} dx = 2\pi$

7. **解**：$\int_0^1 (2x + 1)^2 dx = \int_0^1 (4x^2 + 4x + 1) dx = \left[\frac{4x^3}{3} + 2x^2 + x\right]_0^1 = \frac{4}{3} + 2 + 1 = \frac{13}{3}$

8. **解**：$\int_1^3 \frac{x^2 + 1}{x} dx = \int_1^3 \left(x + \frac{1}{x}\right) dx = \left[\frac{x^2}{2} + \ln x\right]_1^3 = \left(\frac{9}{2} + \ln 3\right) - \left(\frac{1}{2} + 0\right) = 4 + \ln 3$

## 综合应用题

1. **解**：面积$S = \int_0^2 x^2 dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3}$

2. **解**：面积$S = \int_0^\pi \sin x dx = [-\cos x]_0^\pi = 2$

3. **解**：位移$s = \int_0^2 (t^2 + 1) dt = \left[\frac{t^3}{3} + t\right]_0^2 = \frac{8}{3} + 2 = \frac{14}{3}$

4. **解**：平均值$\bar{f} = \frac{1}{2 - 0} \int_0^2 x^2 dx = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$

5. **证明**：令$t = \frac{x - a}{b - a}$，则$x = a + (b - a)t$，$dx = (b - a)dt$。当$x = a$时，$t = 0$；当$x = b$时，$t = 1$。所以：
   $$\int_a^b f(x) dx = \int_0^1 f(a + (b - a)t) \cdot (b - a) dt = (b - a) \int_0^1 f(a + (b - a)t) dt$$

6. **解**：$\lim_{n \to \infty} \sum_{i=1}^n \frac{i}{n^2} = \lim_{n \to \infty} \frac{1}{n^2} \sum_{i=1}^n i = \lim_{n \to \infty} \frac{n(n+1)}{2n^2} = \frac{1}{2}$

7. **解**：$\lim_{n \to \infty} \sum_{i=1}^n \frac{i^2}{n^3} = \lim_{n \to \infty} \frac{1}{n^3} \sum_{i=1}^n i^2 = \lim_{n \to \infty} \frac{n(n+1)(2n+1)}{6n^3} = \frac{1}{3}$

8. **证明**：设$F(x) = \int_a^x f(t) dt$，则$F(a) = 0$，$F(b) = \int_a^b f(t) dt$。由介值定理，存在$\xi \in (a, b)$，使$F(\xi) = \frac{1}{2}F(b)$，即$\int_a^\xi f(x) dx = \frac{1}{2} \int_a^b f(x) dx$。

9. **解**：$\int_0^1 \sqrt{x} dx = \int_0^1 x^{1/2} dx = \left[\frac{2}{3}x^{3/2}\right]_0^1 = \frac{2}{3}$

10. **解**：$\int_{-1}^1 (x^2 + 1) dx = 2 \int_0^1 (x^2 + 1) dx = 2 \left(\frac{1}{3} + 1\right) = \frac{8}{3}$