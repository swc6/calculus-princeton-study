# 第17周：多重积分

## 学习目标
- 理解二重积分的概念、几何意义与基本性质
- 熟练掌握直角坐标系下二重积分化为二次积分的方法（X 型、Y 型区域），会交换积分次序
- 掌握极坐标系下二重积分的计算及适用场合
- 了解三重积分的概念，掌握投影法（先一后二）与截面法（先二后一）
- 掌握柱面坐标、球面坐标下三重积分的计算
- 会用二重积分计算平面图形面积、曲顶柱体体积等

## 学习内容

### 1. 二重积分的概念与性质

#### 1.1 定义
设 $f(x, y)$ 是有界闭区域 $D$ 上的有界函数。将 $D$ 任意分割成 $n$ 个小区域，在每个小区域上任取一点作和式 $\sum_{i=1}^{n} f(\xi_i, \eta_i)\Delta\sigma_i$。若当各小区域直径的最大值 $\lambda \to 0$ 时该和式的极限存在，则称
$$\iint_D f(x,y)\,d\sigma = \lim_{\lambda\to0}\sum_{i=1}^{n} f(\xi_i,\eta_i)\Delta\sigma_i$$
为 $f$ 在 $D$ 上的**二重积分**。在直角坐标系中记 $d\sigma = dx\,dy$。

#### 1.2 几何意义
$f(x,y) \geq 0$ 时，$\iint_D f\,d\sigma$ 表示以 $D$ 为底、曲面 $z = f(x,y)$ 为顶的**曲顶柱体的体积**。特别地，$\iint_D 1\,d\sigma = D$ 的面积。

#### 1.3 基本性质
与定积分类似：线性性、区域可加性、保序性、估值不等式、**积分中值定理**：
$$\iint_D f(x,y)\,d\sigma = f(\xi,\eta)\cdot S_D \quad (\text{连续时必存在 } (\xi,\eta)\in D)$$

对称性（可简化计算，须"区域对称 + 被积函数奇偶"配套）：
- $D$ 关于 $y$ 轴对称：$f(-x,y) = -f(x,y)$（关于 $x$ 为奇）时积分为 $0$；$f(-x,y) = f(x,y)$（偶）时积分为半区域的 2 倍；
- $D$ 关于 $x$ 轴对称类似；
- $D$ 关于 $y = x$ 对称：$\iint_D f(x,y)\,d\sigma = \iint_D f(y,x)\,d\sigma$。

### 2. 直角坐标系下的二重积分

#### 2.1 化为二次积分
**X 型区域** $D = \{(x,y) \mid a \leq x \leq b,\ \varphi_1(x) \leq y \leq \varphi_2(x)\}$：
$$\iint_D f\,d\sigma = \int_a^b dx \int_{\varphi_1(x)}^{\varphi_2(x)} f(x,y)\,dy$$
**Y 型区域** $D = \{(x,y) \mid c \leq y \leq d,\ \psi_1(y) \leq x \leq \psi_2(y)\}$：
$$\iint_D f\,d\sigma = \int_c^d dy \int_{\psi_1(y)}^{\psi_2(y)} f(x,y)\,dx$$
矩形区域上连续函数满足 $f$ 可积时两个次序的二次积分相等。

#### 2.2 典型例题
例：计算 $\iint_D xy\,d\sigma$，$D$ 由 $y = x^2$、$y = 1$ 围成。
- X 型：$0 \leq x \leq 1$，$x^2 \leq y \leq 1$；
$$\int_0^1 x\,dx\int_{x^2}^{1} y\,dy = \int_0^1 x\cdot\frac{1 - x^4}{2}dx = \frac{1}{2}\left(\frac{1}{2} - \frac{1}{6}\right) = \frac{1}{6}$$

例：计算 $\iint_D e^{x^2} d\sigma$，$D$ 由 $y = x$、$x = 1$、$y = 0$ 围成。
- $\int e^{x^2}dx$ 无初等原函数，必须**先对 $y$ 积分**：
$$\int_0^1 e^{x^2}dx\int_0^x dy = \int_0^1 xe^{x^2}dx = \frac{e-1}{2}$$

#### 2.3 交换积分次序
步骤：由二次积分限还原积分区域 → 画图 → 按另一方向定限。

例：交换 $\int_0^1 dx\int_0^{x} f(x,y)dy$ 的次序。
- 区域：$0 \leq x \leq 1$，$0 \leq y \leq x$（三角形）；
- 改为先 $x$ 后 $y$：$0 \leq y \leq 1$，$y \leq x \leq 1$：
$$\int_0^1 dy \int_y^1 f(x,y)\,dx$$

例：交换 $\int_0^1 dx\int_x^{\sqrt{x}} f\,dy$ 的次序。
- 区域：$x \leq y \leq \sqrt{x}$，即介于 $y = x$ 与 $y = \sqrt{x}$ 之间，交点 $(0,0)$、$(1,1)$；
- 换序：$\int_0^1 dy\int_{y^2}^{y} f\,dx$。

### 3. 极坐标系下的二重积分

#### 3.1 变换公式
$$x = r\cos\theta, \quad y = r\sin\theta, \quad d\sigma = r\,dr\,d\theta$$
$$\iint_D f(x,y)\,d\sigma = \iint_{D'} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta$$
**切勿漏掉因子 $r$。**

#### 3.2 适用场合
- 区域为圆域、扇形、圆环，或边界含 $x^2 + y^2$；
- 被积函数含 $x^2 + y^2$、$\frac{y}{x}$ 等形式。

定限方法：先 $\theta$ 范围（射线扫过的角度），再对固定 $\theta$ 定 $r$ 范围。圆域常用：$x^2+y^2 \leq R^2$ 对应 $0 \leq r \leq R$，$0 \leq \theta \leq 2\pi$。

#### 3.3 典型例题
例：计算 $\iint_D e^{-x^2-y^2}d\sigma$，$D: x^2 + y^2 \leq a^2$。
$$\int_0^{2\pi}d\theta\int_0^a e^{-r^2}\,r\,dr = 2\pi\left[-\frac{1}{2}e^{-r^2}\right]_0^a = \pi\left(1 - e^{-a^2}\right)$$
（此积分在直角坐标下无法求出，是夹逼证明 $\int_{-\infty}^{+\infty}e^{-x^2}dx = \sqrt{\pi}$ 的关键。）

例：计算 $\iint_D \sqrt{x^2+y^2}\,d\sigma$，$D: 1 \leq x^2+y^2 \leq 4$。
$$\int_0^{2\pi}d\theta\int_1^2 r\cdot r\,dr = 2\pi\cdot\frac{8-1}{3} = \frac{14\pi}{3}$$

例：计算 $\iint_D (x^2+y^2)\,d\sigma$，$D$ 由 $x^2+y^2 = 2y$ 围成。
- 圆心 $(0,1)$、半径 1：极坐标方程 $r = 2\sin\theta$，$0 \leq \theta \leq \pi$；
$$\int_0^{\pi}d\theta\int_0^{2\sin\theta} r^2\cdot r\,dr = \int_0^{\pi}\frac{(2\sin\theta)^4}{4}d\theta = 4\int_0^{\pi}\sin^4\theta\,d\theta = 4\cdot\frac{3\pi}{8} = \frac{3\pi}{2}$$

### 4. 三重积分

#### 4.1 概念
$$\iiint_\Omega f(x,y,z)\,dV = \lim_{\lambda\to0}\sum_i f(\xi_i,\eta_i,\zeta_i)\Delta V_i, \qquad dV = dx\,dy\,dz$$
物理意义：$f$ 为密度时的质量；$f \equiv 1$ 时为区域 $\Omega$ 的体积。

#### 4.2 投影法（先一后二）
将 $\Omega$ 投影到 $xOy$ 面得 $D_{xy}$，$\Omega = \{(x,y,z) \mid (x,y)\in D_{xy},\ z_1(x,y) \leq z \leq z_2(x,y)\}$：
$$\iiint_\Omega f\,dV = \iint_{D_{xy}} d\sigma \int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z)\,dz$$

例：计算 $\iiint_\Omega z\,dV$，$\Omega$ 由平面 $x + y + z = 1$ 与三坐标面围成（四面体）。
$$\int_0^1 dx\int_0^{1-x}dy\int_0^{1-x-y} z\,dz = \int_0^1 dx\int_0^{1-x}\frac{(1-x-y)^2}{2}dy = \int_0^1 \frac{(1-x)^3}{6}dx = \frac{1}{24}$$

#### 4.3 截面法（先二后一）
若被积函数只含 $z$、截面 $D(z)$ 面积易求：
$$\iiint_\Omega f(z)\,dV = \int_{c_1}^{c_2} f(z)\,S(z)\,dz$$

例：计算 $\iiint_\Omega z^2 dV$，$\Omega: x^2 + y^2 + z^2 \leq R^2$。
- 截面 $D(z)$：$x^2+y^2 \leq R^2 - z^2$，面积 $\pi(R^2 - z^2)$；
$$\int_{-R}^{R} z^2\pi(R^2 - z^2)dz = \pi\left[R^2\cdot\frac{2R^3}{3} - \frac{2R^5}{5}\right] = \frac{4\pi R^5}{15}$$

### 5. 柱面坐标与球面坐标

#### 5.1 柱面坐标
$$x = r\cos\theta,\ y = r\sin\theta,\ z = z, \qquad dV = r\,dr\,d\theta\,dz$$
适用于含旋转对称（圆柱形区域、被积函数含 $x^2+y^2$）的情形。先"二重积分极坐标化 + 竖直方向一层"理解。

例：计算 $\iiint_\Omega z\,dV$，$\Omega$ 由 $z = x^2+y^2$ 与 $z = 1$ 围成。
$$\int_0^{2\pi}d\theta\int_0^1 r\,dr\int_{r^2}^{1} z\,dz = 2\pi\int_0^1 r\cdot\frac{1-r^4}{2}dr = \pi\left(\frac{1}{2}-\frac{1}{6}\right) = \frac{\pi}{3}$$

#### 5.2 球面坐标
$$x = r\sin\varphi\cos\theta,\ y = r\sin\varphi\sin\theta,\ z = r\cos\varphi, \qquad dV = r^2\sin\varphi\,dr\,d\varphi\,d\theta$$
其中 $\varphi$ 为与 $z$ 轴正向的夹角（$0 \leq \varphi \leq \pi$）。适用于球形区域、被积函数含 $x^2+y^2+z^2$。

例：计算 $\iiint_\Omega \sqrt{x^2+y^2+z^2}\,dV$，$\Omega: x^2+y^2+z^2 \leq R^2$（上半空间 $z \geq 0$，即半球）。
$$\int_0^{2\pi}d\theta\int_0^{\pi/2}\sin\varphi\,d\varphi\int_0^R r\cdot r^2 dr = 2\pi\cdot1\cdot\frac{R^4}{4} = \frac{\pi R^4}{2}$$

#### 5.3 常用体积公式（用三重积分验证）
- 球：$V = \iiint_{r\leq R} dV = \int_0^{2\pi}\!\!\int_0^{\pi}\!\!\int_0^R r^2\sin\varphi\,dr\,d\varphi\,d\theta = \frac{4}{3}\pi R^3$。

## 学习建议
- 化二次积分前**先画区域图**，由图定限，避免死记公式
- 遇 $\int e^{\pm x^2}dx$、$\int\frac{\sin x}{x}dx$ 等积不出时，果断**交换积分次序**
- 极坐标勿漏 $r$；球坐标勿漏 $r^2\sin\varphi$——这是最常见错误
- 区域是圆（环、扇）或函数含 $x^2+y^2$ 时优先考虑极坐标
- 三重积分先判断对称性，再选坐标系：圆柱形用柱坐标、球形用球坐标、被积函数只含一个变量用截面法
- 检验方法：算出的体积/面积量纲与正负号是否合理
