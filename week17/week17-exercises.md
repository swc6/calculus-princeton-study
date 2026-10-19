# 第17周：练习题目

## 二重积分的概念、性质与直角坐标计算

### 选择题
1. 设 $D$ 是由 $x = 0$，$y = 0$，$x + y = 1$ 围成的三角形，则 $\iint_D d\sigma =$ （ ）
   A. $1$
   B. $\frac{1}{2}$
   C. $\frac{1}{4}$
   D. $2$

2. $\int_0^1 dx\int_0^x y\,dy$ 等于（ ）
   A. $\frac{1}{6}$
   B. $\frac{1}{4}$
   C. $\frac{1}{8}$
   D. $\frac{1}{3}$

3. 设 $D: x^2 + y^2 \leq 1$，则 $\iint_D \sqrt{x^2+y^2}\left(x^3 + \sin y \cdot e^{x^2} + 1\right) d\sigma$ 等于（ ）
   A. $2\pi$
   B. $\frac{2\pi}{3}$
   C. $\frac{\pi}{2}$
   D. $\frac{4\pi}{3}$

### 填空题
1. 交换积分次序：$\int_0^1 dx\int_{x^2}^{x} f(x,y)\,dy =$ __________

2. $\iint_D e^{x+y}d\sigma =$ __________，其中 $D: 0 \leq x \leq 1$，$0 \leq y \leq 1$

3. 设 $D$ 由 $y = x$ 与 $y = x^2$ 围成，则 $\iint_D xy\,d\sigma =$ __________

### 解答题
1. 计算 $\iint_D (x + y)^2 d\sigma$，$D$ 由 $x = 1$、$y = 1$、$x + y = 1$ 围成（在第一象限的小三角形）。

2. 计算 $\iint_D x\cos(x+y)\,d\sigma$，$D$ 由 $x = 0$、$y = \pi$、$y = x$ 围成。

3. 交换积分次序并计算：$\int_0^1 dx\int_{x}^{1} e^{y^2}dy$。

4. 计算 $\iint_D |xy| d\sigma$，$D: x^2 + y^2 \leq 1$。

5. 计算 $\iint_D (x^2 + y^2 - x) d\sigma$，$D$ 由 $y = 2$、$y = x$、$y = 2x$ 围成。

6. 利用对称性简化并计算 $\iint_D (x^2 y + \sin x \cos y)\,d\sigma$，$D: x^2 + y^2 \leq 1$，$y \geq 0$（上半圆盘）。

## 极坐标下的二重积分

### 选择题
1. 将 $\iint_D f(x,y)d\sigma$（$D: x^2+y^2 \leq 2x$）化为极坐标二次积分，正确的是（ ）
   A. $\int_0^{2\pi}d\theta\int_0^{2\cos\theta} f(r\cos\theta, r\sin\theta)dr$
   B. $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}d\theta\int_0^{2\cos\theta} f(r\cos\theta, r\sin\theta)\,r\,dr$
   C. $\int_0^{\pi}d\theta\int_0^{2\sin\theta} f\,r\,dr$
   D. $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}d\theta\int_0^{2\cos\theta} f\,dr$

2. $\iint_{x^2+y^2\leq a^2} (x^2 + y^2)\,d\sigma$ 等于（ ）
   A. $\pi a^4$
   B. $\frac{\pi a^4}{2}$
   C. $\frac{\pi a^4}{4}$
   D. $2\pi a^4$

3. 下列二重积分中，**适合**用极坐标计算的是（ ）
   A. $\iint_D \frac{x}{y}d\sigma$，$D$ 为矩形 $[1,2]\times[1,2]$
   B. $\iint_D (x+y)d\sigma$，$D$ 为三角形
   C. $\iint_D \arctan\frac{y}{x}\,d\sigma$，$D$ 为 $\frac{1}{4}$ 圆域 $x^2+y^2\leq1$，$x\geq0$，$y\geq0$
   D. $\iint_D xy\,d\sigma$，$D$ 为矩形

### 填空题
1. $\iint_{x^2+y^2\leq4} e^{-(x^2+y^2)}d\sigma =$ __________

2. 极坐标下 $x^2+y^2 \leq 2y$ 的边界方程为 $r =$ __________，$\theta$ 范围为 __________

3. $\iint_D \sqrt{x^2+y^2}\,d\sigma =$ __________，其中 $D: 0 \leq \theta \leq \frac{\pi}{4}$，$0 \leq r \leq 1$（即单位圆被 $y = 0$ 与 $y = x$ 夹的扇形）

### 解答题
1. 计算 $\iint_D \ln(1+x^2+y^2)d\sigma$，$D: x^2+y^2 \leq 1$，$x \geq 0$，$y \geq 0$（第一象限四分之一圆盘）。

2. 计算 $\iint_D \frac{d\sigma}{\sqrt{x^2+y^2}}$，$D$ 由 $x^2+y^2 = 1$ 与 $x^2+y^2 = 4$ 围成的圆环。

3. 计算 $\iint_D (x^2+y^2)\,d\sigma$，$D$ 由 $r = 2a\cos\theta$（$-\frac{\pi}{2}\le\theta\le\frac{\pi}{2}$）围成（圆心在 $(a, 0)$、半径 $a$ 的圆）。

4. 将 $\int_0^1 dx\int_0^{\sqrt{1-x^2}} \sin(x^2+y^2)\,dy$ 化为极坐标并计算。

5. 计算 $\iint_D y\,d\sigma$，$D$ 由 $x^2+y^2 = 2x$ 的上半部分与 $x$ 轴围成（上半圆域）。

6. 计算由曲面 $z = x^2+y^2$ 与平面 $z = 4$ 围成的立体的体积（提示：体积 $= \iint_D (4 - x^2-y^2)d\sigma$，$D$ 为底面投影圆盘）。

## 三重积分与柱面、球面坐标

### 选择题
1. 柱面坐标下体积元素 $dV$ 等于（ ）
   A. $dr\,d\theta\,dz$
   B. $r\,dr\,d\theta\,dz$
   C. $r^2\,dr\,d\theta\,dz$
   D. $\sin\varphi\,dr\,d\theta\,dz$

2. 球面坐标下体积元素 $dV$ 等于（ ）
   A. $r\,dr\,d\varphi\,d\theta$
   B. $r^2\,dr\,d\varphi\,d\theta$
   C. $r^2\sin\varphi\,dr\,d\varphi\,d\theta$
   D. $r\sin\varphi\,dr\,d\varphi\,d\theta$

3. 计算 $\iiint_\Omega (x^2+y^2+z^2)dV$，$\Omega: x^2+y^2+z^2\leq1$，最简便的方法是（ ）
   A. 直角坐标投影法
   B. 柱面坐标
   C. 截面法（先二后一）
   D. 球面坐标

### 填空题
1. 设 $\Omega$ 由平面 $x=0$、$y=0$、$z=0$、$x+y+z=1$ 围成，则 $\iiint_\Omega dV =$ __________

2. $\iiint_{x^2+y^2+z^2\leq R^2} dV =$ __________（用球坐标直接写出结果）

3. 用柱面坐标，$\Omega$ 由 $z = x^2+y^2$、$z = 4$ 围成，则 $\iiint_\Omega dV = \int_0^{2\pi}d\theta\int_0^2 r\,dr\int_{\underline{\ \ }}^{\underline{\ \ }}dz$（补全积分限）

### 解答题
1. 计算 $\iiint_\Omega x\,dV$，$\Omega$ 由平面 $x + y + z = 1$ 与三坐标面围成。

2. 用截面法（先二后一）计算 $\iiint_\Omega z\,dV$，$\Omega: x^2 + y^2 + z^2 \leq R^2$，$z \geq 0$（半球）。

3. 用柱面坐标计算 $\iiint_\Omega (x^2+y^2)dV$，$\Omega$ 由 $z = x^2+y^2$ 与 $z = 1$ 围成。

4. 用球面坐标计算 $\iiint_\Omega \sqrt{x^2+y^2+z^2}\,dV$，$\Omega: x^2+y^2+z^2 \leq R^2$。

5. 计算 $\iiint_\Omega z\,dV$，$\Omega$ 由 $z = \sqrt{x^2+y^2}$ 与 $z = 1$ 围成（圆锥体）。

6. 用三重积分求由球面 $x^2+y^2+z^2 = 2az$（$a > 0$）围成的立体体积（提示：球面坐标下边界为 $r = 2a\cos\varphi$）。

## 综合应用题

1. 求由曲线 $y^2 = 2x$ 与直线 $y = x - 4$ 围成的平面图形的面积。

2. 计算由抛物面 $z = x^2 + y^2$、柱面 $x^2+y^2 = 2x$ 及平面 $z = 0$ 围成的立体的体积。

3. 求球体 $x^2+y^2+z^2 \leq R^2$ 被圆柱面 $x^2+y^2 = Rx$（$R>0$）所截出的立体（Viviani 立体）的体积表达式：写出适当的二次积分（不必求出解析值），并说明用的坐标系。

4. 设 $f(x,y)$ 连续，交换积分次序：$\int_0^1 dx\int_{x^2}^{1} f(x,y)dy$，并计算当 $f(x,y) = \dfrac{xy}{\sqrt{1+y^3}}$ 时该积分的值。

5. 计算 $\iint_D \frac{x+y}{x^2+y^2}\,d\sigma$，$D: x^2+y^2 \leq 1$，$x+y \geq 1$。

6. 求由曲面 $z = \sqrt{x^2+y^2}$（圆锥面）与 $z = 1$、$z = 2$ 两平面所围圆台（截头圆锥）的体积。

7. 设 $\Omega$ 为球体 $x^2+y^2+z^2 \leq 1$，计算 $\iiint_\Omega (x + y + z)^2 dV$（提示：展开后利用对称性，奇次项积分为零）。

8. 密度函数 $\rho(x,y) = x^2 + y^2$ 的薄片占据区域 $D: x^2+y^2 \leq 4$（$y \geq 0$，上半圆盘），求薄片的质量与平均密度。
