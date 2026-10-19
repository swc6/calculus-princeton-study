# 第15周：多元函数

## 学习目标
- 理解多元函数的概念，会求定义域
- 理解二元函数的极限与连续性，会讨论简单极限的存在性
- 掌握偏导数的定义与计算方法，理解其几何意义
- 掌握高阶偏导数，理解混合偏导数相等的条件
- 理解全微分的概念、可微的条件及可微与偏导数存在、连续之间的关系
- 掌握多元复合函数的求导法则（链式法则）与隐函数求导

## 学习内容

### 1. 多元函数的基本概念

#### 1.1 定义与定义域
设 $D$ 是平面点集，若对 $D$ 中每一点 $P(x, y)$，按某对应法则有唯一实数 $z$ 与之对应，则称 $z = f(x, y)$ 为**二元函数**，$D$ 为其定义域。类似可定义三元及更多元函数。

求定义域：使表达式有意义的点集，注意分母不为零、偶次根号下非负、对数真数为正等。

例：求 $z = \ln(y - x) + \frac{\sqrt{x}}{\sqrt{1 - x^2 - y^2}}$ 的定义域。
- 要求 $y > x$，$x \geq 0$，$1 - x^2 - y^2 > 0$；
- 定义域为 $\{(x, y) \mid y > x,\ x \geq 0,\ x^2 + y^2 < 1\}$。

#### 1.2 平面区域与邻域
- **开集/闭集**、**开区域/闭区域**：不含/包含边界的连通点集；
- **邻域**：$U(P_0, \delta) = \{(x, y) \mid (x-x_0)^2 + (y-y_0)^2 < \delta^2\}$；
- **有界/无界区域**：能否被足够大的圆盘覆盖。

### 2. 二元函数的极限与连续

#### 2.1 二重极限
设 $P_0(x_0, y_0)$ 为 $f$ 定义域的聚点。若当点 $P(x, y)$ 以**任何方式**趋于 $P_0$ 时，$f(P) \to A$，则称 $\lim_{(x,y)\to(x_0,y_0)} f(x,y) = A$。

与一元极限的关键区别：$P \to P_0$ 的路径有无穷多，**沿不同路径极限不同 $\Rightarrow$ 极限不存在**；但沿任意路径极限相同并不能直接断言极限存在（需借助定义或夹逼证明）。

例：证明 $\lim_{(x,y)\to(0,0)} \frac{x^2 y}{x^4 + y^2}$ 不存在。
- 沿 $y = kx$：$\frac{kx^3}{x^4 + k^2x^2} = \frac{kx}{x^2 + k^2} \to 0$（$k \neq 0$ 时极限为 0，与 $k$ 无关）；
- 沿 $y = x^2$：$\frac{x^4}{2x^4} = \frac{1}{2} \neq 0$；
- 两条路径极限不同，故极限不存在。

例：求 $\lim_{(x,y)\to(0,0)} \frac{x^2 y^2}{x^2 + y^2}$。
- 由 $x^2 + y^2 \geq 2|xy|$，得 $\left|\frac{x^2y^2}{x^2+y^2}\right| \leq \frac{|xy|^2}{2|xy|} = \frac{|xy|}{2} \leq \frac{x^2 + y^2}{4} \to 0$；
- 由夹逼，极限为 $0$。

#### 2.2 连续性
若 $\lim_{P \to P_0} f(P) = f(P_0)$，称 $f$ 在 $P_0$ 连续。多元初等函数在其定义区域内连续。有界闭区域上的连续函数必有最大值、最小值（最值定理）。

### 3. 偏导数

#### 3.1 定义与计算
$$f_x(x_0, y_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x, y_0) - f(x_0, y_0)}{\Delta x}$$
即固定 $y = y_0$，对 $x$ 求一元导数。求偏导不必用定义：对 $x$ 求偏导时把 $y$ 当常数即可。

例：$z = x^2 y + e^{xy}$，求 $z_x$、$z_y$。
- $z_x = 2xy + ye^{xy}$，$z_y = x^2 + xe^{xy}$。

例：$f(x, y) = x^y$（$x > 0$），求 $f_x$、$f_y$。
- $f_x = y x^{y-1}$，$f_y = x^y \ln x$。

#### 3.2 偏导数的几何意义
$f_x(x_0, y_0)$ 是曲面 $z = f(x, y)$ 被平面 $y = y_0$ 所截曲线在该点处切线的斜率（对 $x$ 方向）。

#### 3.3 高阶偏导数
二阶偏导数有四个：$f_{xx}, f_{xy}, f_{yx}, f_{yy}$。

**混合偏导数定理**：若 $f_{xy}$ 与 $f_{yx}$ 都在点 $(x_0, y_0)$ 处连续，则 $f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0)$。

例：$z = x^3 y^2 - 3xy^3$，求各二阶偏导数。
- $z_x = 3x^2y^2 - 3y^3$，$z_y = 2x^3y - 9xy^2$；
- $z_{xx} = 6xy^2$，$z_{yy} = 2x^3 - 18xy$，$z_{xy} = 6x^2y - 9y^2 = z_{yx}$。

### 4. 全微分

#### 4.1 定义
若 $\Delta z = f(x+\Delta x, y+\Delta y) - f(x, y)$ 可写成
$$\Delta z = A\Delta x + B\Delta y + o(\rho), \qquad \rho = \sqrt{(\Delta x)^2 + (\Delta y)^2}$$
则称 $f$ 在 $(x, y)$ **可微**，$dz = A\,dx + B\,dy$ 为**全微分**。可微时必有 $A = f_x$，$B = f_y$，故
$$dz = f_x\,dx + f_y\,dy$$

#### 4.2 可微、偏导、连续的关系
- 可微 $\Rightarrow$ 连续、偏导数存在；
- **偏导数存在 $\neq$ 可微**（甚至不保证连续）；
- **偏导数连续 $\Rightarrow$ 可微**（充分条件）。

反例：$f(x,y) = \sqrt{x^2+y^2}$ 在 $(0,0)$ 连续，但 $f_x(0,0)$ 不存在，故不可微；$f(x,y) = \frac{xy}{x^2+y^2}$ 在 $(0,0)$ 两个偏导都存在（均为 0），但极限不存在故不连续，从而不可微。

#### 4.3 用全微分作近似计算
$$f(x_0 + \Delta x, y_0 + \Delta y) \approx f(x_0, y_0) + f_x(x_0,y_0)\Delta x + f_y(x_0,y_0)\Delta y$$

例：计算 $(1.02)^{1.97}$ 的近似值。
- 取 $f(x,y) = x^y$，$(x_0, y_0) = (1, 2)$，$\Delta x = 0.02$，$\Delta y = -0.03$；
- $f_x = yx^{y-1} = 2$，$f_y = x^y\ln x = 0$；
- 近似值 $\approx 1 + 2 \times 0.02 + 0 \times (-0.03) = 1.04$。

#### 4.4 全微分形式不变性
无论 $u, v$ 是自变量还是中间变量，$z = f(u, v)$ 的微分都有形式 $dz = f_u\,du + f_v\,dv$，这为复合函数求微分与偏导提供了一致框架。

### 5. 多元复合函数的求导法则

#### 5.1 链式法则
设 $z = f(u, v)$，$u = u(t)$，$v = v(t)$，则
$$\frac{dz}{dt} = \frac{\partial z}{\partial u}\frac{du}{dt} + \frac{\partial z}{\partial v}\frac{dv}{dt}$$
设 $z = f(u, v)$，$u = u(x, y)$，$v = v(x, y)$，则
$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}, \qquad \frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$$
**口诀**：连线相乘，分线相加。

#### 5.2 典型例题
例：设 $z = e^{u}\sin v$，$u = xy$，$v = x + y$，求 $\frac{\partial z}{\partial x}$。
- $\frac{\partial z}{\partial x} = e^u\sin v \cdot y + e^u\cos v \cdot 1 = e^{xy}\left[y\sin(x+y) + \cos(x+y)\right]$。

例：设 $z = f(x^2 - y^2, xy)$（$f$ 可微），求 $z_x$、$z_y$。
- 记 $u = x^2 - y^2$，$v = xy$：
$$z_x = 2x f_1 + y f_2, \qquad z_y = -2y f_1 + x f_2$$
其中 $f_1$、$f_2$ 表示 $f$ 对第一、第二个变量的偏导数。

例：设 $z = f(x, y)$，$y = \varphi(x)$，求全导数 $\frac{dz}{dx}$。
- $\frac{dz}{dx} = f_x + f_y \varphi'(x)$（注意 $x$ 既是中间变量又是自变量）。

#### 5.3 高阶复合偏导
例：$z = f(u, v)$，$u = x + y$，$v = xy$，求 $z_{xy}$（设 $f$ 有二阶连续偏导数）。
- $z_x = f_1 + y f_2$；
- $z_{xy} = f_{11} \cdot 1 + f_{12} \cdot x + f_2 + y\left(f_{21} \cdot 1 + f_{22} \cdot x\right) = f_{11} + (x + y)f_{12} + xy f_{22} + f_2$。

### 6. 隐函数的求导

#### 6.1 一个方程的情形
设 $F(x, y) = 0$ 确定 $y = y(x)$，且 $F_y \neq 0$，则
$$\frac{dy}{dx} = -\frac{F_x}{F_y}$$
设 $F(x, y, z) = 0$ 确定 $z = z(x, y)$，且 $F_z \neq 0$，则
$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \qquad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$$

例：设 $e^z - xyz = 0$ 确定 $z = z(x, y)$，求 $z_x$、$z_y$。
- $F = e^z - xyz$：$F_x = -yz$，$F_y = -xz$，$F_z = e^z - xy$；
- $z_x = \frac{yz}{e^z - xy}$，$z_y = \frac{xz}{e^z - xy}$。

#### 6.2 方程组的情形（求全导数）
例：设 $\begin{cases} x + y + z = 0 \\ x^2 + y^2 + z^2 = 1 \end{cases}$ 确定 $y = y(x)$，$z = z(x)$，求 $\frac{dy}{dx}$。
- 两式对 $x$ 求导：$1 + y' + z' = 0$，$2x + 2yy' + 2zz' = 0$；
- 消去 $z'$：$z' = -1 - y'$，代入第二式：$x + yy' + z(-1 - y') = 0$，得
$$\frac{dy}{dx} = \frac{z - x}{y - z}$$

## 学习建议
- 判断二元极限不存在：找两条路径给出不同值（常取 $y = kx$ 与 $y = kx^2$ 等）
- 讨论极限存在时善用夹逼：$x^2 + y^2 \geq 2|xy|$、$|x| \leq \sqrt{x^2+y^2}$ 等不等式
- 牢记关系链：偏导连续 $\Rightarrow$ 可微 $\Rightarrow$ 连续 且偏导存在；反向均不成立
- 链式法则先画"变量树"再写公式，避免漏项
- 隐函数求导认清哪个变量是哪个变量的函数，方程两边对自变量求导（把因变量看作中间变量）
