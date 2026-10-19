# 第15周：练习题目

## 多元函数的定义域、极限与连续

### 选择题
1. 函数 $z = \frac{1}{\sqrt{x}} + \ln(x + y)$ 的定义域为（ ）
   A. $x > 0$ 且 $x + y > 0$
   B. $x > 0$ 且 $y > 0$
   C. $x \geq 0$ 且 $x + y > 0$
   D. $x > 0$ 或 $x + y > 0$

2. $\lim_{(x,y)\to(0,0)} \frac{xy}{x^2+y^2}$（ ）
   A. 等于 $0$
   B. 等于 $\frac{1}{2}$
   C. 不存在
   D. 等于 $1$

3. $\lim_{(x,y)\to(0,0)} \frac{\sin(x^2+y^2)}{x^2+y^2}$ 等于（ ）
   A. $0$
   B. $1$
   C. 不存在
   D. $\frac{1}{2}$

### 填空题
1. 函数 $z = \sqrt{4 - x^2 - y^2} + \ln(x^2 + y^2 - 1)$ 的定义域为 __________

2. $\lim_{(x,y)\to(0,0)} \frac{x^2+y^2}{\sqrt{x^2+y^2+1}-1} =$ __________

3. $\lim_{(x,y)\to(0,3)} \frac{\sin(xy)}{x} =$ __________

### 解答题
1. 求函数 $z = \arcsin\frac{x}{2} + \sqrt{y - x^2}$ 的定义域。

2. 证明 $\lim_{(x,y)\to(0,0)} \frac{x^2y}{x^2+y^2} = 0$。

3. 证明 $\lim_{(x,y)\to(0,0)} \frac{x+y}{x-y}$ 不存在。

4. 证明 $\lim_{(x,y)\to(0,0)} \frac{x^2y^2}{x^4+y^4}$ 不存在（提示：考虑 $y = kx$）。

5. 求 $\lim_{(x,y)\to(0,0)} \frac{1-\cos(x^2+y^2)}{(x^2+y^2)^2}$。

6. 讨论 $f(x,y) = \begin{cases} \dfrac{x^3}{x^2+y^2}, & (x,y) \neq (0,0) \\ 0, & (x,y) = (0,0) \end{cases}$ 在 $(0,0)$ 处的连续性。

## 偏导数与全微分

### 选择题
1. 设 $z = x^3 y^2$，则 $z_x =$ （ ）
   A. $3x^2y^2$
   B. $2x^3y$
   C. $3x^2$
   D. $x^3y^2\ln x$

2. 函数 $z = f(x,y)$ 在点 $(x_0, y_0)$ 处偏导数存在是它在该点可微的（ ）
   A. 充分必要条件
   B. 充分但非必要条件
   C. 必要但非充分条件
   D. 既非充分也非必要条件

3. 设 $z = e^{xy}$，则 $dz\big|_{(1,1)} =$ （ ）
   A. $e\,dx + e\,dy$
   B. $e\,dx - e\,dy$
   C. $e^2(dx + dy)$
   D. $dx + dy$

### 填空题
1. 设 $z = x^2 \sin y$，则 $z_y =$ __________，$z_{xy} =$ __________

2. 设 $u = (xy)^z$，则 $u_z =$ __________

3. 设 $z = \ln(x^2 + y^2)$，则 $z_x + z_y$ 在 $x = 1$、$y = 1$ 处的值为 __________

### 解答题
1. 设 $z = x^2 y + \frac{y}{x}$，求 $z_x$、$z_y$ 及其在 $(1, 2)$ 处的值。

2. 设 $f(x, y) = e^{-x}\sin(2y)$，求 $f_x$、$f_y$、$f_{xx}$、$f_{xy}$、$f_{yy}$。

3. 验证 $z = \ln\sqrt{x^2+y^2}$ 满足拉普拉斯方程 $z_{xx} + z_{yy} = 0$。

4. 设 $z = x^y$（$x > 0$），求全微分 $dz$。

5. 用全微分近似计算 $\sin 29^{\circ} \cos 44^{\circ}$（提示：取 $f(x,y)=\sin x\cos y$，$(x_0,y_0)=(30^{\circ},45^{\circ})$，弧度制计算）。

6. 证明 $f(x,y) = \begin{cases} \dfrac{xy}{\sqrt{x^2+y^2}}, & (x,y) \neq (0,0) \\ 0, & (x,y) = (0,0) \end{cases}$ 在 $(0,0)$ 处偏导数存在但不可微（提示：考察 $\lim_{\rho\to0}\frac{\Delta f - f_x(0,0)\Delta x - f_y(0,0)\Delta y}{\rho}$）。

## 复合函数与隐函数求导

### 选择题
1. 设 $z = u^2 v$，$u = x + y$，$v = x - y$，则 $\frac{\partial z}{\partial x} =$ （ ）
   A. $2uv$
   B. $2uv + 2v^2$
   C. $2uv - 2v^2$
   D. $2uv + 2u^2$

2. 设 $z = f(x^2 + y^2)$（$f$ 可导），则 $y\,z_x - x\,z_y =$ （ ）
   A. $0$
   B. $1$
   C. $2f'$
   D. $xy f'$

3. 设 $x + y + z = e^{-(x+y+z)}$ 确定 $z = z(x,y)$，则 $z_x + z_y =$ （ ）
   A. $-2$
   B. $-1$
   C. $0$
   D. $e^{-(x+y+z)}$

### 填空题
1. 设 $z = e^{u - 2v}$，$u = \sin t$，$v = t^2$，则 $\frac{dz}{dt} =$ __________（用 $t$ 表示）

2. 设 $z = f(2x - y, xy)$（$f$ 有连续一阶偏导数），则 $z_x =$ __________

3. 设 $\frac{x}{z} = \ln\frac{z}{y}$ 确定 $z = z(x, y)$，则 $z_x =$ __________

### 解答题
1. 设 $z = uv + \sin t$，$u = e^t$，$v = \cos t$，求全导数 $\frac{dz}{dt}$。

2. 设 $z = f(x^2 - y^2, e^{xy})$（$f$ 有连续一阶偏导数），求 $z_x$、$z_y$。

3. 设 $z = f(x, xy)$（$f$ 有二阶连续偏导数），求 $z_{xy}$。

4. 设 $xz = \ln(yz)$ 确定 $z = z(x, y)$，求 $z_x$、$z_y$。

5. 设 $z = f(u)$，$u = x^2 + y^2$（$f$ 可导），求 $z_x$、$z_y$ 并验证 $y z_x - x z_y = 0$。

6. 设 $F(x - y, y - z, z - x) = 0$ 确定 $z = z(x, y)$（$F$ 有连续一阶偏导数），求 $z_x + z_y$。

## 综合应用题

1. 设 $z = \arctan\frac{y}{x}$，验证 $z_{xx} + z_{yy} = 0$。

2. 设 $z = f(x + y, x - y)$（$f$ 有二阶连续偏导数），求 $z_{xx} + z_{yy}$。

3. 证明：$u = \frac{1}{\sqrt{x^2+y^2+z^2}}$ 满足三维拉普拉斯方程 $u_{xx} + u_{yy} + u_{zz} = 0$（$r \neq 0$）。

4. 设 $z = f(x, y)$ 可微，$x = r\cos\theta$，$y = r\sin\theta$，证明 $\left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2 = \left(\frac{\partial z}{\partial r}\right)^2 + \frac{1}{r^2}\left(\frac{\partial z}{\partial \theta}\right)^2$。

5. 用全微分近似计算 $(1.97)^{1.05}$（提示：$1.97 = 2 - 0.03$，$1.05 = 1 + 0.05$，取 $f(x,y) = x^y$，$(x_0,y_0)=(2,1)$）。

6. 设 $x = x(y, z)$、$y = y(x, z)$、$z = z(x, y)$ 都由方程 $F(x, y, z) = 0$ 确定，证明 $\frac{\partial x}{\partial y}\cdot\frac{\partial y}{\partial z}\cdot\frac{\partial z}{\partial x} = -1$。

7. 设 $u = f(x, xy, xyz)$（$f$ 有二阶连续偏导数），求 $\frac{\partial u}{\partial y}$ 与 $\frac{\partial^2 u}{\partial y \partial z}$。

8. 一圆柱体的底半径 $r$ 由 $10\,\text{cm}$ 增加到 $10.1\,\text{cm}$，高 $h$ 由 $20\,\text{cm}$ 减少到 $19.8\,\text{cm}$。用全微分估计体积 $V = \pi r^2 h$ 的变化量，并比较精确变化量。
