# 第17周：练习答案

## 二重积分的概念、性质与直角坐标计算

### 选择题
1. **答案：B**
   解析：$\iint_D d\sigma$ 为区域面积，直角三角形两直角边均为 1，面积 $\frac{1}{2}$

2. **答案：A**
   解析：$\int_0^1\left[\int_0^x y\,dy\right]dx = \int_0^1\frac{x^2}{2}dx = \frac{1}{6}$

3. **答案：B**
   解析：$D$ 关于两坐标轴对称。$\sqrt{x^2+y^2}\,x^3$ 关于 $x$ 为奇，积分为 $0$；$\sqrt{x^2+y^2}\sin y\,e^{x^2}$ 关于 $y$ 为奇，积分为 $0$。
   剩下 $\iint_D \sqrt{x^2+y^2}\,d\sigma = \int_0^{2\pi}d\theta\int_0^1 r^2 dr = \frac{2\pi}{3}$

### 填空题
1. **答案：$\displaystyle\int_0^1 dy\int_y^{\sqrt y} f(x,y)\,dx$**
   解析：区域 $0\le x\le1$，$x^2\le y\le x$；改为水平条带：$0\le y\le1$，$y\le x\le\sqrt y$

2. **答案：$(e-1)^2$**
   解析：$\int_0^1 e^x dx\int_0^1 e^y dy = (e-1)(e-1)$

3. **答案：$\dfrac{1}{24}$**
   解析：$\int_0^1 x\,dx\int_{x^2}^{x} y\,dy = \int_0^1 x\cdot\frac{x^2 - x^4}{2}dx = \frac12\left(\frac14-\frac16\right) = \frac{1}{24}$

### 解答题
1. **解**：$D$：$0\le x\le1$，$1-x\le y\le1$（顶点 $(0,1),(1,0),(1,1)$ 的三角形）。
   $$\iint_D x^2 d\sigma = \int_0^1 x^2\left[1-(1-x)\right]dx = \int_0^1 x^3 dx = \frac14$$
   由区域关于 $y=x$ 对称，$\iint_D y^2 d\sigma = \frac14$；
   $$\iint_D 2xy\,d\sigma = 2\int_0^1 x\,dx\int_{1-x}^1 y\,dy = \int_0^1 x\left[1-(1-x)^2\right]dx = \int_0^1(2x^2 - x^3)dx = \frac23-\frac14 = \frac{5}{12}$$
   合计：$\frac14+\frac5{12}+\frac14 = \frac{11}{12}$

2. **解**：$D$：$0\le x\le\pi$，$x\le y\le\pi$。
   $$\int_0^\pi x\,dx\int_x^\pi \cos(x+y)dy = \int_0^\pi x\left[\sin(x+y)\right]_x^\pi dx = \int_0^\pi x\left[\sin(\pi+x) - \sin 2x\right]dx = -\int_0^\pi x(\sin x + \sin 2x)dx$$
   $\int_0^\pi x\sin x\,dx = \pi$；$\int_0^\pi x\sin2x\,dx = -\frac{\pi}{2}$（分部积分）。
   故原式 $= -\pi + \frac{\pi}{2} = -\frac{\pi}{2}$

3. **解**：区域：$0\le x\le1$，$x\le y\le1$（$\int e^{y^2}dy$ 无初等原函数，须换序）。
   换序为 $0\le y\le1$，$0\le x\le y$：
   $$\int_0^1 e^{y^2}dy\int_0^y dx = \int_0^1 ye^{y^2}dy = \frac{e-1}{2}$$

4. **解**：$D$ 关于两轴对称，$|xy|$ 关于 $x$、$y$ 均为偶函数，故
   $$\iint_D |xy|\,d\sigma = 4\int_0^{\pi/2}d\theta\int_0^1 r^2\cos\theta\sin\theta\cdot r\,dr = 4\cdot\frac12\cdot\frac14 = \frac12$$

5. **解**：$D$：$0\le y\le2$，$\frac{y}{2}\le x\le y$（由 $y=2x$ 与 $y=x$ 夹、上方 $y=2$ 截断）。
   $$\int_0^2 dy\int_{y/2}^{y}\left(x^2 - x + y^2\right)dx = \int_0^2\left(\frac{y^3}{3}-\frac{y^2}{2}+y^3 - \frac{y^3}{24}+\frac{y^2}{8}-\frac{y^3}{2}\right)dy = \int_0^2\left(\frac{19y^3}{24}-\frac{3y^2}{8}\right)dy = \frac{19}{6}-1 = \frac{13}{6}$$

6. **解**：$D$（上半圆盘）关于 $y$ 轴对称。
   $x^2 y$ 关于 $x$ 为偶……不对，$x^2y$ 关于 $x$ 为偶函数，不能消去；但 $\sin x\cos y$ 关于 $x$ 为奇函数，积分为 $0$。
   $x^2y$ 关于 $y$：$D$ 在 $y\ge0$ 不对称，需直接计算：
   $$\int_{-1}^1 x^2 dx\int_0^{\sqrt{1-x^2}} y\,dy = \int_{-1}^1 \frac{x^2(1-x^2)}{2}dx = \int_0^1 (x^2 - x^4)dx = \frac13-\frac15 = \frac{2}{15}$$
   故原积分 $= \frac{2}{15} + 0 = \frac{2}{15}$

## 极坐标下的二重积分

### 选择题
1. **答案：B**
   解析：$x^2+y^2\le2x$ 即 $r\le2\cos\theta$，$\theta\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$，且须带因子 $r$
   （A 漏因子 $r$；C 边界与角度范围错配；D 漏因子 $r$）

2. **答案：B**
   解析：$\int_0^{2\pi}d\theta\int_0^a r^2\cdot r\,dr = 2\pi\cdot\frac{a^4}{4} = \frac{\pi a^4}{2}$

3. **答案：C**
   解析：被积函数 $\arctan\frac{y}{x}$ 在极坐标下即 $\theta$，圆域边界简单，最合适

### 填空题
1. **答案：$\pi\left(1-e^{-4}\right)$**
   解析：$\int_0^{2\pi}d\theta\int_0^2 e^{-r^2}r\,dr = 2\pi\cdot\frac{1-e^{-4}}{2}$

2. **答案：$r = 2\sin\theta$；$0 \leq \theta \leq \pi$**
   解析：$x^2+y^2=2y$ 即 $r^2 = 2r\sin\theta$，$r = 2\sin\theta \geq 0$ 要求 $\theta\in[0,\pi]$

3. **答案：$\dfrac{\pi}{12}$**
   解析：$\int_0^{\pi/4}d\theta\int_0^1 r\cdot r\,dr = \frac{\pi}{4}\cdot\frac13 = \frac{\pi}{12}$

### 解答题
1. **解**：$\int_0^{\pi/2}d\theta\int_0^1 \ln(1+r^2)\,r\,dr$。令 $u = 1+r^2$：
   $$\frac12\int_1^2\ln u\,du = \frac12\left[u\ln u - u\right]_1^2 = \frac12(2\ln2 - 1) = \ln2 - \frac12$$
   原式 $= \frac{\pi}{2}\left(\ln 2 - \frac{1}{2}\right)$

2. **解**：$\int_0^{2\pi}d\theta\int_1^2 \frac{1}{r}\cdot r\,dr = 2\pi\cdot(2-1) = 2\pi$

3. **解**：$\int_{-\pi/2}^{\pi/2}d\theta\int_0^{2a\cos\theta}r^3 dr = \int_{-\pi/2}^{\pi/2}\frac{(2a\cos\theta)^4}{4}d\theta = 4a^4\int_{-\pi/2}^{\pi/2}\cos^4\theta\,d\theta = 4a^4\cdot\frac{3\pi}{8} = \frac{3\pi a^4}{2}$

4. **解**：区域为第一象限四分之一单位圆盘：
   $$\int_0^{\pi/2}d\theta\int_0^1 \sin(r^2)\,r\,dr = \frac{\pi}{2}\left[-\frac{\cos r^2}{2}\right]_0^1 = \frac{\pi(1-\cos 1)}{4}$$

5. **解**：$D$：$0\le\theta\le\frac{\pi}{2}$，$0\le r\le2\cos\theta$。
   $$\int_0^{\pi/2}d\theta\int_0^{2\cos\theta}(r\sin\theta)\,r\,dr = \int_0^{\pi/2}\sin\theta\cdot\frac{8\cos^3\theta}{3}d\theta = \frac83\left[-\frac{\cos^4\theta}{4}\right]_0^{\pi/2} = \frac{2}{3}$$

6. **解**：底面投影 $D: x^2+y^2\le4$，高 $4-(x^2+y^2)$：
   $$V = \int_0^{2\pi}d\theta\int_0^2 (4-r^2)\,r\,dr = 2\pi\left[2r^2-\frac{r^4}{4}\right]_0^2 = 2\pi(8-4) = 8\pi$$

## 三重积分与柱面、球面坐标

### 选择题
1. **答案：B**
   解析：柱面坐标雅可比因子为 $r$，$dV = r\,dr\,d\theta\,dz$

2. **答案：C**
   解析：球面坐标 $dV = r^2\sin\varphi\,dr\,d\varphi\,d\theta$

3. **答案：D**
   解析：被积函数与区域都含 $x^2+y^2+z^2$，球坐标下化为 $\int_0^{2\pi}\int_0^\pi\int_0^1 r^4\sin\varphi\,dr\,d\varphi\,d\theta$，最简便

### 填空题
1. **答案：$\dfrac{1}{6}$**
   解析：四面体体积 $= \frac{1}{3}\times(\text{底面积}\frac12)\times(\text{高}1) = \frac16$

2. **答案：$\dfrac{4\pi R^3}{3}$**
   解析：$\int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^R r^2 dr = 2\pi\cdot2\cdot\frac{R^3}{3}$

3. **答案：$r^2$ 到 $4$**
   解析：抛物面 $z = r^2$ 在下，平面 $z=4$ 在上

### 解答题
1. **解**：$\Omega$：$0\le x\le1$，$0\le y\le1-x$，$0\le z\le1-x-y$。
   $$\iiint_\Omega x\,dV = \int_0^1 x\,dx\int_0^{1-x}dy\int_0^{1-x-y}dz = \int_0^1 x\,dx\int_0^{1-x}(1-x-y)dy = \int_0^1 \frac{x(1-x)^2}{2}dx = \frac12\left(\frac12-\frac23+\frac14\right) = \frac{1}{24}$$

2. **解**：截面 $D(z)$：$x^2+y^2\le R^2 - z^2$，面积 $\pi(R^2-z^2)$，$z\in[0,R]$：
   $$\iiint_\Omega z\,dV = \int_0^R z\cdot\pi(R^2-z^2)dz = \pi\left(\frac{R^4}{2}-\frac{R^4}{4}\right) = \frac{\pi R^4}{4}$$

3. **解**：柱面坐标：$\Omega$：$0\le\theta\le2\pi$，$0\le r\le1$，$r^2\le z\le1$。
   $$\iiint_\Omega(x^2+y^2)dV = \int_0^{2\pi}d\theta\int_0^1 r^2\cdot r\,dr\int_{r^2}^1 dz = 2\pi\int_0^1 r^3(1-r^2)dr = 2\pi\left(\frac14-\frac16\right) = \frac{\pi}{6}$$

4. **解**：$\int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^R r\cdot r^2 dr = 2\pi\cdot2\cdot\frac{R^4}{4} = \pi R^4$

5. **解**：柱面坐标：$0\le\theta\le2\pi$，$0\le r\le1$，$r\le z\le1$。
   $$\iiint_\Omega z\,dV = \int_0^{2\pi}d\theta\int_0^1 r\,dr\int_r^1 z\,dz = 2\pi\int_0^1\frac{r(1-r^2)}{2}dr = \pi\left(\frac12-\frac14\right) = \frac{\pi}{4}$$

6. **解**：球面 $x^2+y^2+z^2 = 2az$ 在球坐标下为 $r = 2a\cos\varphi$，$\varphi\in[0,\frac{\pi}{2}]$。
   $$V = \int_0^{2\pi}d\theta\int_0^{\pi/2}\sin\varphi\,d\varphi\int_0^{2a\cos\varphi}r^2 dr = 2\pi\int_0^{\pi/2}\frac{8a^3\cos^3\varphi\sin\varphi}{3}d\varphi = \frac{16\pi a^3}{3}\cdot\frac14 = \frac{4\pi a^3}{3}$$

## 综合应用题

1. **解**：联立 $y^2 = 2x$ 与 $y = x-4$：$y^2 = 2(y+4)$，$y^2-2y-8=0$，$y = 4$ 或 $-2$。
   用水平条带：$x_{\text{左}} = \frac{y^2}{2}$，$x_{\text{右}} = y+4$：
   $$S = \int_{-2}^{4}\left(y+4-\frac{y^2}{2}\right)dy = \left[\frac{y^2}{2}+4y-\frac{y^3}{6}\right]_{-2}^{4} = \left(8+16-\frac{32}{3}\right)-\left(2-8+\frac{4}{3}\right) = 18$$

2. **解**：$V = \iint_D (x^2+y^2)\,d\sigma$，$D$：$x^2+y^2\le2x$，即 $r\le2\cos\theta$，$-\frac{\pi}{2}\le\theta\le\frac{\pi}{2}$：
   $$V = \int_{-\pi/2}^{\pi/2}d\theta\int_0^{2\cos\theta}r^3 dr = \int_{-\pi/2}^{\pi/2}4\cos^4\theta\,d\theta = 4\cdot\frac{3\pi}{8} = \frac{3\pi}{2}$$

3. **解**：立体在球内、圆柱 $x^2+y^2\le Rx$（即 $r\le R\cos\theta$）内。取**柱面坐标**：
   $$V = \int_{-\pi/2}^{\pi/2}d\theta\int_0^{R\cos\theta} 2\sqrt{R^2-r^2}\;r\,dr$$
   （圆柱边界使 $\theta$ 上限依赖 $\cos\theta$，用柱坐标最自然；该积分无简单初等闭式，写出表达式即可）

4. **解**：区域：$0\le x\le1$，$x^2\le y\le1$，即 $0\le y\le1$，$0\le x\le\sqrt y$。换序：
   $$\int_0^1 dy\int_0^{\sqrt y} \frac{xy}{\sqrt{1+y^3}}dx = \int_0^1 \frac{y}{\sqrt{1+y^3}}\cdot\frac{y}{2}dy = \frac12\int_0^1\frac{y^2}{\sqrt{1+y^3}}dy$$
   令 $u = 1+y^3$：$= \frac12\cdot\frac13\left[2\sqrt u\right]_{u=1}^{2}\cdot$……即
   $$\frac12\cdot\frac{2}{3}\left[\sqrt{1+y^3}\right]_0^1 = \frac13\left(\sqrt2-1\right)$$

5. **解**：$D$：单位圆内、直线 $x+y=1$ 上方，交圆于 $(1,0)$、$(0,1)$，故 $0\le\theta\le\frac{\pi}{2}$，$\frac{1}{\cos\theta+\sin\theta}\le r\le1$。
   $$\iint_D \frac{x+y}{x^2+y^2}d\sigma = \int_0^{\pi/2}d\theta\int_{\frac{1}{\cos\theta+\sin\theta}}^1 \frac{r(\cos\theta+\sin\theta)}{r^2}\cdot r\,dr = \int_0^{\pi/2}(\cos\theta+\sin\theta)\left(1-\frac{1}{\cos\theta+\sin\theta}\right)d\theta$$
   $$= \int_0^{\pi/2}(\cos\theta+\sin\theta)d\theta - \frac{\pi}{2} = \left[\sin\theta-\cos\theta\right]_0^{\pi/2} - \frac{\pi}{2} = 2 - \frac{\pi}{2}$$

6. **解**：圆台即圆锥 $z=\sqrt{x^2+y^2}$ 被 $z=1$ 与 $z=2$ 截出的部分。截面法：高 $z$ 处截面为半径 $z$ 的圆，面积 $\pi z^2$：
   $$V = \int_1^2 \pi z^2 dz = \pi\cdot\frac{8-1}{3} = \frac{7\pi}{3}$$
   （亦可用柱坐标验证：$\int_0^{2\pi}\int_1^2\int_0^z r\,dr\,dz\,d\theta = \frac{7\pi}{3}$）

7. **解**：$(x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx)$。
   $\Omega$ 关于各坐标面对称，$xy$ 关于 $x$（或 $y$）为奇函数，其积分为 $0$；同理 $yz$、$zx$ 积分为 $0$。
   $$\iiint_\Omega (x^2+y^2+z^2)dV = \int_0^{2\pi}d\theta\int_0^\pi\sin\varphi\,d\varphi\int_0^1 r^4 dr = 2\pi\cdot2\cdot\frac15 = \frac{4\pi}{5}$$
   故原积分 $= \frac{4\pi}{5}$

8. **解**：质量 $M = \iint_D (x^2+y^2)d\sigma$，$D$：上半圆盘 $r\le2$，$0\le\theta\le\pi$：
   $$M = \int_0^{\pi}d\theta\int_0^2 r^2\cdot r\,dr = \pi\cdot4 = 4\pi$$
   面积 $S = \frac{1}{2}\pi\cdot2^2 = 2\pi$，平均密度 $= \frac{M}{S} = \frac{4\pi}{2\pi} = 2$
